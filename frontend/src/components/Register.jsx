import React from 'react'
import { useState } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from './ui/button'
import { toast } from "react-hot-toast";

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  })

  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();


  const handleInputChange = (event) =>{   

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) =>{
    event.preventDefault();
    setLoading(true);
    try{
      const {data} = await axios.post("/api/users/register", formData);
      toast.success(data.message);
      setLoading(false);
      navigate("/login");
    } catch(e){
      setLoading(false);
      toast.error(e.response.data.message);
      console.log(e);
    }
  }


  return (
    <div className='w-full'>
    <Card>
  <CardHeader>
    <CardTitle>Register with Your Info</CardTitle>
    <CardDescription>Register with Your Info</CardDescription>
    {/* <CardAction>Card Action</CardAction> */}
  </CardHeader>
  <CardContent>
    <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
              onChange={handleInputChange}
                name="email"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
              <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                onChange={handleInputChange}
                id="username"
                name="username"
                type="username"
                placeholder="Your username"
                required
              />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                  <Input 
                  name="password"
                  onChange={handleInputChange}
                   id="password" type="password"
                    placeholder="*******" required />
            </div>
             <div className="grid gap-2">
               <Button type="submit" className={"w-full"}>{loading ? "Registering..." : "Register"}</Button>
            </div>
          </div>
        </form>
  </CardContent>
 
</Card> 
</div>
  )
}
