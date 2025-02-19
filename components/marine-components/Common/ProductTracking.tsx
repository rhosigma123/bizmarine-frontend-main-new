"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { X } from "lucide-react"
import { ShoppingCart, Truck, CheckCircle } from "lucide-react"

interface OrderStatus {
    stage: "placed" | "transit" | "completed"
    children:React.ReactNode
  }

function ProductTracking({stage="transit",children}:OrderStatus) {
  return (
    <Dialog>
      <DialogTrigger className="">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="  pb-5 border-b  text-lg font-medium text-primary ">
            Order Tracking - 012345
          </DialogTitle>
          {/* <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription> */}
        </DialogHeader>

        <section className="w-full relative flex flex-col gap-3 py-5">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                SHIPPED VIA
              </h3>
              <p className="text-lg font-medium text-secondary">DELHIVERY</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                STATUS
              </h3>
              <p className="text-lg font-medium text-secondary">IN Transit</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                EXPECTED
              </h3>
              <p className="text-lg font-medium text-secondary">12 March 2025</p>
            </div>
          </div>

          <div className="relative mt-8 flex justify-between">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2">
              <div
                className={`h-full bg-primary  transition-all duration-500 ease-in-out ${
                  stage === "placed"
                    ? "w-0"
                    : stage === "transit"
                    ? "w-1/2"
                    : "w-full"
                }`}
              />
              <div className="absolute top-0 h-full w-full border-t border-dashed border-slate-200" />
            </div>

            {/* Status Points */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div
                className={`rounded-full p-3 ${
                  stage === "placed" ||
                  stage === "transit" ||
                  stage === "completed"
                    ? "bg-primary  text-white"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                <ShoppingCart className="h-7 w-7" />
              </div>
              <span className="text-sm font-medium">Order Placed</span>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-2">
              <div
                className={`rounded-full p-3 ${
                  stage === "transit" || stage === "completed"
                    ? " bg-primary text-white"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                <Truck className="h-7 w-7" />
              </div>
              <span className="text-sm font-medium">In Transit</span>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-2">
              <div
                className={`rounded-full p-3 ${
                  stage === "completed"
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                <CheckCircle className="h-7 w-7" />
              </div>
              <span className="text-base  text-foreground font-medium">Completed</span>
            </div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}

export default ProductTracking;
