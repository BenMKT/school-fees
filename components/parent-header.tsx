'use client';

import { Bell, Search, MessageSquare, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useParentShell } from '@/components/parent-shell';

export function ParentHeader() {
  const { openMobileSidebar } = useParentShell();

  return (
    <header className="flex h-14 sm:h-16 shrink-0 items-center gap-2 border-b px-3 sm:px-4">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="lg:hidden -ml-1 shrink-0"
        aria-label="Open menu"
        onClick={openMobileSidebar}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <h1 className="text-base sm:text-xl font-semibold truncate">
            Welcome back, Robert!
          </h1>
          <Badge
            variant="outline"
            className="hidden sm:inline-flex bg-green-50 text-green-700 border-green-200 shrink-0"
          >
            Greenwood High School
          </Badge>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-48 lg:w-64 pl-8"
            />
          </div>

          <Button variant="ghost" size="icon" className="relative h-9 w-9">
            <MessageSquare className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 text-[10px] bg-blue-500">
              3
            </Badge>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-9 w-9">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 text-[10px] bg-red-500">
                  5
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 sm:w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Payment Due Reminder</p>
                  <p className="text-xs text-muted-foreground">
                    Emma&apos;s tuition fee is due on Feb 15th
                  </p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full p-0"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Parent"
                  />
                  <AvatarFallback>RD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Payment Methods</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
