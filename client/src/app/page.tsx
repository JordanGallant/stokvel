import React from 'react'
import Hydra from '@/components/shaders/Hydra'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export default function Home() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Hydra />
      </div>
      
      <div className='w-screen h-1/2 flex items-center justify-center space-x-5'>
        
        
        <Card className="h-75 w-75 opacity-100 hover:opacity-25 transition-opacity duration-300 cursor-pointer" >
          <CardHeader>
            <CardTitle className="text-lg">Web 2.0</CardTitle>
          </CardHeader>
          <CardContent>
            <p>modern day stokvels</p>
          </CardContent>
          
        </Card>

     
        <Card className="h-75 w-75 opacity-100 hover:opacity-25 transition-opacity duration-300 cursor-pointer">
          <CardHeader>
            <CardTitle className="text-lg">Web 3.0</CardTitle>
          </CardHeader>
          <CardContent>
            <p>built on smart contracts</p>
          </CardContent>
         
        </Card>

      </div>
    </>
  )
}
