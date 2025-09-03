import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Search,
  MapPin,
  Clock,
  Users,
  Star,
  ChevronDownIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { TimePicker } from '@/components/TimePicker';
import Court from '../assets/modern-sports-complex.jpg';

const popularSports = [
  { name: 'Basketball', icon: '🏀', courts: 12 },
  { name: 'Tennis', icon: '🎾', courts: 8 },
  { name: 'Badminton', icon: '🏸', courts: 15 },
  { name: 'Volleyball', icon: '🏐', courts: 6 },
  { name: 'Squash', icon: '🎯', courts: 4 },
  { name: 'Table Tennis', icon: '🏓', courts: 10 },
];

const nearbyVenues = [
  {
    id: 1,
    name: 'Downtown Sports Complex',
    location: 'Downtown District',
    distance: '0.5 km',
    rating: 4.8,
    courts: 8,
    priceFrom: 15,
    image: Court,
    sports: ['Basketball', 'Tennis', 'Badminton'],
  },
  {
    id: 2,
    name: 'Elite Fitness Center',
    location: 'Business District',
    distance: '1.2 km',
    rating: 4.6,
    courts: 12,
    priceFrom: 20,
    image: '/elite-fitness-center.png',
    sports: ['Squash', 'Table Tennis', 'Volleyball'],
  },
  {
    id: 3,
    name: 'Community Recreation Hub',
    location: 'Residential Area',
    distance: '2.1 km',
    rating: 4.7,
    courts: 6,
    priceFrom: 12,
    image: '/community-recreation-center.png',
    sports: ['Basketball', 'Volleyball', 'Badminton'],
  },
];

export default function LandingPage() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    S
                  </span>
                </div>
                <span className="font-bold text-xl">Slotify</span>
              </div>

              <div className="hidden md:flex items-center space-x-6">
                <Link
                  to="/"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/venues"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Venues
                </Link>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link to="/book">Book Now</Link>
              </Button>
              <Button asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Book Sports Venues <br />
            <span className="text-primary">anywhere anytime</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-12 max-w-2xl mx-auto">
            Find and reserve your favorite courts with just a few clicks.
            Discover the best sports facilities in your area and book instantly.
          </p>

          {/* Search Filter */}
          <div className="bg-card border rounded-2xl p-6 max-w-5xl mx-auto shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {/* Court */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Search Court</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select court" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="downtown-basketball">
                      Downtown Basketball Court
                    </SelectItem>
                    <SelectItem value="elite-tennis">
                      Elite Tennis Court
                    </SelectItem>
                    <SelectItem value="community-badminton">
                      Community Badminton Hall
                    </SelectItem>
                    <SelectItem value="sports-complex-volleyball">
                      Sports Complex Volleyball
                    </SelectItem>
                    <SelectItem value="fitness-squash">
                      Fitness Center Squash Court
                    </SelectItem>
                    <SelectItem value="recreation-table-tennis">
                      Recreation Table Tennis
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Location</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="downtown">Downtown District</SelectItem>
                    <SelectItem value="business">Business District</SelectItem>
                    <SelectItem value="residential">
                      Residential Area
                    </SelectItem>
                    <SelectItem value="north-side">North Side</SelectItem>
                    <SelectItem value="south-side">South Side</SelectItem>
                    <SelectItem value="east-end">East End</SelectItem>
                    <SelectItem value="west-end">West End</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sport */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Sport</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basketball">Basketball</SelectItem>
                    <SelectItem value="tennis">Tennis</SelectItem>
                    <SelectItem value="badminton">Badminton</SelectItem>
                    <SelectItem value="volleyball">Volleyball</SelectItem>
                    <SelectItem value="squash">Squash</SelectItem>
                    <SelectItem value="table-tennis">Table Tennis</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-3">
                <Label htmlFor="date-picker" className="px-1">
                  Date
                </Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date-picker"
                      className="w-full justify-between font-normal bg-transparent"
                    >
                      {date ? date.toLocaleDateString() : 'Select date'}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        setDate(date);
                        setOpen(false);
                      }}
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <TimePicker
                id="start-time"
                label="Start Time"
                value="10:30"
                onChange={(val) => console.log('Start Time:', val)}
              />

              <TimePicker
                id="end-time"
                label="End Time"
                value=""
                onChange={(val) => console.log('End Time:', val)}
              />
            </div>

            <div className="mt-6 text-center lg:text-right">
              <Button className="w-full lg:w-auto lg:px-8">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courts Near You */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Courts Near You
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nearbyVenues.map((venue) => (
              <Card
                key={venue.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video relative">
                  <img
                    src={venue.image || '/placeholder.svg'}
                    alt={venue.name}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-3 right-3 bg-background/90 text-foreground">
                    {venue.distance}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{venue.name}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {venue.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {venue.rating}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{venue.courts} courts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>From ${venue.priceFrom}/hour</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {venue.sports.map((sport) => (
                      <Badge key={sport} variant="outline" className="text-xs">
                        {sport}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Sports */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Sports
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularSports.map((sport) => (
              <Card
                key={sport.name}
                className="text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{sport.icon}</div>
                  <h3 className="font-semibold mb-1">{sport.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {sport.courts} courts
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                S
              </span>
            </div>
            <span className="font-bold text-xl">Slotify</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Teqgrow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
