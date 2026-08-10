import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Shop, Offer } from '../types';


interface UseShopsOptions {
  category?: string;
  searchQuery?: string;
}

interface UseShopsResult {
  shops: Shop[];
  loading: boolean;
  error: string | null;
}

export function useShops(options: UseShopsOptions = {}): UseShopsResult {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShops = async () => {
      setLoading(true);
      setError(null);

      try {
        let query = supabase
          .from('shops')
          .select('*, profiles:owner_id(id, name, email)')
          .eq('verified', true)
          .order('shop_name', { ascending: true });

        if (options.category && options.category !== 'all') {
          query = query.eq('shop_category', options.category);
        }

        if (options.searchQuery) {
          query = query.ilike('shop_name', `%${options.searchQuery}%`);
        }

        const { data, error: fetchError } = await query;

        if (fetchError) throw fetchError;
        setShops((data as Shop[]) || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load shops');
        setShops([]);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, [options.category, options.searchQuery]);

  return { shops, loading, error };
}

export function useShopById(id: string | undefined) {
  const [shop, setShop] = useState<Shop | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchShop = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error: fetchError } = await supabase
          .from('shops')
          .select('*, profiles:owner_id(id, name, email)')
          .eq('id', id)
          .single();

        if (fetchError) throw fetchError;
        setShop(data as Shop);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Shop not found');
        setShop(null);
      } finally {
        setLoading(false);
      }
    };

    fetchShop();
  }, [id]);

  return { shop, loading, error };
}

export function useOffersByShopId(shopId: string | undefined) {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!shopId) {
      setLoading(false);
      return;
    }

    const fetchOffers = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error: fetchError } = await supabase
          .from('offers')
          .select('*')
          .eq('shop_id', shopId)
          .eq('status', 'active')
          .order('created_at', { ascending: false });

        if (fetchError) throw fetchError;
        setOffers((data as Offer[]) || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load offers');
        setOffers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, [shopId]);

  return { offers, loading, error };
}

