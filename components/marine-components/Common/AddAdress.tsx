import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Addressinterfce = {
  children: React.ReactNode;
};

function AddAdress({ children }: Addressinterfce) {
  return (
    <Dialog>
      <DialogTrigger className="h-auto w-auto relative ">
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="  pb-5 border-b  text-lg font-medium text-primary ">
            Add New Address
          </DialogTitle>
          {/* <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription> */}
        </DialogHeader>

        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName"  className="py-1 px-1" placeholder="Enter your name" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="Enter company name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" className="py-1 px-1" placeholder="Enter phone number" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="addressLine1">Address Line 1</Label>
          <Input id="addressLine1"  className="py-1 px-1" placeholder="Enter address line 1" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="addressLine2">Address Line 2</Label>
          <Input id="addressLine2" placeholder="Enter address line 2" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" className="py-1 px-1" placeholder="Enter city" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="postalCode">Postal/Zip</Label>
            <Input id="postalCode" placeholder="Enter postal code" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country/Region</Label>
            <Input id="country"  className="py-1 px-1"   placeholder="Enter country" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* <Checkbox id="defaultAddress" /> */}
            <input type="checkbox" id="defaultAddress" />

          <Label
            htmlFor="defaultAddress"
            className="text-sm text-muted-foreground"
          >
            Set as Default Address
          </Label>
        </div>

        <Button className="w-full bg-teal-600 hover:bg-teal-700">
          Save Address
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default AddAdress;
