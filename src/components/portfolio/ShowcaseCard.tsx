import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ShieldCheck, MessagesSquare, ShoppingBag } from "lucide-react";

export function ShowcaseCard() {
  return (
    <Card className="rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border-white/10 text-white">
      <CardContent className="p-6">
        <div className="grid gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest opacity-80">Recent Work</p>
            <h3 className="mt-1 text-lg font-semibold">Enterprise + Real-time + Commerce + SaaS</h3>
          </div>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-white" /> Enterprise CMS for Kenya Power
            </li>
            <li className="flex items-center gap-2">
              <MessagesSquare className="size-4 text-white" /> Real-time legal comms (Masika Law)
            </li>
            <li className="flex items-center gap-2">
              <ShoppingBag className="size-4 text-white" /> Multi-tenant SaaS (Roundi Commerce)
            </li>
          </ul>

          <div className="flex gap-3">
            <Button asChild className="rounded-2xl text-white">
              <a href="#projects">See Portfolio</a>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="rounded-2xl text-slate-600 border-white/20 hover:bg-white/10"
            >
              <a
                href="https://www.linkedin.com/in/bernard-omuse-638a1236a/"
                target="_blank"
                rel="noreferrer"
              >
                Connect <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
