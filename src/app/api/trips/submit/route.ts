import { NextResponse } from 'next/server';
import { saveTripSubmission } from '@/services/tripSubmissionService';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tripId, tripState } = body;

    if (!tripId || !tripState) {
      return NextResponse.json(
        { error: 'Missing tripId or tripState in request payload' },
        { status: 400 }
      );
    }

    const saved = await saveTripSubmission(tripId, tripState);
    return NextResponse.json({ success: true, record: saved });
  } catch (error) {
    console.error('Failed to save trip submission', error);
    return NextResponse.json(
      { error: 'Internal server error saving trip' },
      { status: 500 }
    );
  }
}
