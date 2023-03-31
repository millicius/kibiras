// import { createItem, getItems } from "../../../lib/prisma/items"
import prisma from '../../../lib/prisma/index.js'
import { NextResponse } from "next/server"

export async function GET() {
    // const { items } = await getItems()
    const names = await prisma.items.findMany()
    
    return NextResponse.json(names)
  }

export async function POST(request) {
    // const data = request.body

    //const { item } = await createItem(data)
    //console.log(item)
    const json = await request.json()

    const created = await prisma.items.create({ data: json })

    return new NextResponse(JSON.stringify(created))
  }
  