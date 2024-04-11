import { NextResponse } from 'next/server'

export async function GET(request) {
    return NextResponse.json({ msg: 'We Secured the POST API End Point' }, { status: 200 })
}
 


