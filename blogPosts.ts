import { useState, useEffect, useCallback } from 'react';
import { INITIAL_LEADS, INITIAL_CLIENTS, INITIAL_JOBS } from '@/mocks/crmData';

export type LeadStatus = 'new' | 'contacted' | 'proposal-sent' | 'closed-won' | 'closed-lost';
export type ClientStatus = 'active' | 'inactive';
export type JobStatus = 'active' | 'completed' | 'cancelled' | 'on-hold';
export type BillingType = 'recurring' | 'one-time';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  propertyType: string;
  serviceInterest: string;
  message: string;
  preferredContact: string;
  status: LeadStatus;
  source: string;
  createdAt: string;
  assignedTo: string;
  notes: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  propertyType: string;
  status: ClientStatus;
  startDate: string;
  notes: string;
  assignedTo: string;
  createdAt: string;
  leadId: string | null;
}

export interface Job {
  id: string;
  clientId: string;
  clientName: string;
  title: string;
  description: string;
  serviceType: string;
  status: JobStatus;
  billingType: BillingType;
  price: number;
  billingCycle: string | null;
  startDate: string;
  endDate: string | null;
  notes: string;
  createdAt: string;
  assignedTo: string;
}

const DB_NAME = 'BroadviewCRM';
const DB_VERSION = 1;
const STORES = ['leads', 'clients', 'jobs'] as const;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      STORES.forEach((store) => {
        if (!db.objectStoreNames.contains(store)) {
          db.createObjectStore(store, { keyPath: 'id' });
        }
      });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAll<T>(store: string): Promise<T[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result as T[]);
    req.onerror = () => reject(req.error);
  });
}

async function putItem<T>(store: string, item: T): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).put(item);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

async function deleteItem(store: string, id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

async function seedStoreIfEmpty<T>(store: string, seedData: T[]): Promise<void> {
  const existing = await getAll<T>(store);
  if (existing.length === 0) {
    for (const item of seedData) {
      await putItem(store, item);
    }
  }
}

export function useCrmLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    await seedStoreIfEmpty('leads', INITIAL_LEADS);
    const data = await getAll<Lead>('leads');
    data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    setLeads(data);
    setLoading(false);
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const saveLead = useCallback(async (lead: Lead) => {
    await putItem('leads', lead);
    await refresh();
  }, [refresh]);

  const deleteLead = useCallback(async (id: string) => {
    await deleteItem('leads', id);
    await refresh();
  }, [refresh]);

  return { leads, loading, saveLead, deleteLead, refresh };
}

export function useCrmClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    await seedStoreIfEmpty('clients', INITIAL_CLIENTS);
    const data = await getAll<Client>('clients');
    data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    setClients(data);
    setLoading(false);
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const saveClient = useCallback(async (client: Client) => {
    await putItem('clients', client);
    await refresh();
  }, [refresh]);

  const deleteClient = useCallback(async (id: string) => {
    await deleteItem('clients', id);
    await refresh();
  }, [refresh]);

  return { clients, loading, saveClient, deleteClient, refresh };
}

export function useCrmJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    await seedStoreIfEmpty('jobs', INITIAL_JOBS);
    const data = await getAll<Job>('jobs');
    data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    setJobs(data);
    setLoading(false);
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const saveJob = useCallback(async (job: Job) => {
    await putItem('jobs', job);
    await refresh();
  }, [refresh]);

  const deleteJob = useCallback(async (id: string) => {
    await deleteItem('jobs', id);
    await refresh();
  }, [refresh]);

  return { jobs, loading, saveJob, deleteJob, refresh };
}
