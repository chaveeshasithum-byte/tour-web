import { TripState } from '@/types/trip';

export interface SubmittedTripRecord {
  tripId: string;
  createdAt: string;
  status: 'PENDING_REVIEW' | 'CONFIRMED';
  tripState: TripState;
}

// In-memory mock store for submitted trips (ready to be replaced by Prisma client / PostgreSQL)
const submittedTripsStore: Record<string, SubmittedTripRecord> = {};

export async function saveTripSubmission(
  tripId: string,
  tripState: TripState
): Promise<SubmittedTripRecord> {
  const record: SubmittedTripRecord = {
    tripId,
    createdAt: new Date().toISOString(),
    status: 'PENDING_REVIEW',
    tripState,
  };

  submittedTripsStore[tripId] = record;
  return record;
}

export async function getTripById(tripId: string): Promise<SubmittedTripRecord | null> {
  return submittedTripsStore[tripId] || null;
}
