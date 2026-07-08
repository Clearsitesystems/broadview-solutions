export interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: 'lawn-maintenance' | 'seasonal-cleanup' | 'snow-plowing' | 'general';
  rating: number;
  text: string;
  date: string;
  avatar?: string;
  propertyImage?: string;
  highlight?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Margaret Hensley',
    location: 'Goshen, IN',
    service: 'lawn-maintenance',
    rating: 5,
    text: "Alex and his crew have been mowing our lawn for over a year now, and I couldn't be happier. As a senior homeowner, I needed someone reliable who wouldn't make me chase them down every week. They show up like clockwork, the yard always looks pristine, and they even blow off our porch without being asked. Truly neighbors helping neighbors.",
    date: '2025-03-15',
    highlight: 'Senior homeowner favorite',
  },
  {
    id: 2,
    name: 'Mark Thompson',
    location: 'Goshen, IN',
    service: 'lawn-maintenance',
    rating: 5,
    text: "Broadview Solutions has been maintaining our commercial property in Goshen for two seasons now. Reliable, professional, and the lawn always looks immaculate. They show up on schedule every single time — no excuses, no surprises. Highly recommend for any business owner in Elkhart County.",
    date: '2024-08-20',
    highlight: 'Commercial property manager',
  },
  {
    id: 3,
    name: 'Sarah Mitchell',
    location: 'Elkhart, IN',
    service: 'seasonal-cleanup',
    rating: 5,
    text: "We hired Broadview for fall cleanup and were blown away by the results. They cleared every leaf, trimmed the beds, and left the yard looking better than it did all summer. Alex was easy to communicate with and the pricing was very fair. Will absolutely be using them again for spring cleanup.",
    date: '2024-10-05',
    highlight: 'Repeat seasonal client',
  },
  {
    id: 4,
    name: 'David Richardson',
    location: 'Middlebury, IN',
    service: 'snow-plowing',
    rating: 5,
    text: "Called Broadview after a big snowstorm and they were out plowing within a couple hours. Driveway and walkways were completely clear. Very responsive and professional. This is the kind of local business you want to support — they actually care about doing a good job, not just making a quick buck.",
    date: '2025-01-18',
    highlight: 'Emergency response praise',
  },
  {
    id: 5,
    name: 'Jennifer Kowalski',
    location: 'Elkhart, IN',
    service: 'lawn-maintenance',
    rating: 5,
    text: "I've tried several lawn care companies in the Elkhart area and Broadview Solutions is by far the best. The crew is friendly, the work is consistent, and they actually listen when you have specific requests. My yard has never looked this good. Five stars without hesitation.",
    date: '2025-03-10',
    highlight: 'Switched from competitor',
  },
  {
    id: 6,
    name: 'Robert & Linda Carr',
    location: 'Bristol, IN',
    service: 'lawn-maintenance',
    rating: 5,
    text: "As retirees, we wanted a lawn service that was dependable and wouldn't require us to constantly follow up. Broadview has exceeded every expectation. The crew is courteous, they respect our flower beds, and the edging along our walkway is always crisp and clean. Worth every penny.",
    date: '2025-04-02',
    highlight: 'Senior couple, long-term client',
  },
  {
    id: 7,
    name: 'Amanda Foster',
    location: 'Wakarusa, IN',
    service: 'seasonal-cleanup',
    rating: 5,
    text: "The spring cleanup Broadview did for us was incredible. They removed all the winter debris, freshened our mulch beds, pruned our shrubs, and even noticed a drainage issue we hadn't seen. They fixed it on the spot. That's the kind of attention to detail you don't find often.",
    date: '2025-04-10',
    highlight: 'Extra care noticed',
  },
  {
    id: 8,
    name: 'Gregory Holt',
    location: 'Goshen, IN',
    service: 'snow-plowing',
    rating: 5,
    text: "We signed up for the seasonal snow contract last winter, and it was the best decision. Every single storm, our driveway and parking area were cleared before 7 AM. The ice melt application kept our walkways safe for our elderly parents who visit often. Professional from start to finish.",
    date: '2025-02-28',
    highlight: 'Seasonal contract client',
  },
  {
    id: 9,
    name: 'Patricia Nguyen',
    location: 'Elkhart, IN',
    service: 'lawn-maintenance',
    rating: 4,
    text: "Broadview has been great for our family. With three kids and both parents working full-time, lawn care was always the last thing on our list. Now we come home to a perfectly manicured yard every week. The kids can play outside without us worrying about tall grass or weeds.",
    date: '2024-09-12',
    highlight: 'Busy family favorite',
  },
  {
    id: 10,
    name: 'Steven Blackwell',
    location: 'Bristol, IN',
    service: 'general',
    rating: 5,
    text: "I manage three rental properties in Bristol and Goshen, and Broadview handles all of them. One call, one invoice, three perfectly maintained properties. They've saved me countless hours of tenant complaints about overgrown yards. My tenants are happy, and so am I.",
    date: '2025-03-22',
    highlight: 'Property manager',
  },
  {
    id: 11,
    name: 'Dorothy Williams',
    location: 'Middlebury, IN',
    service: 'seasonal-cleanup',
    rating: 5,
    text: "At 78 years old, raking leaves is no longer an option for me. Broadview's fall cleanup service was a godsend. They were gentle with my garden, respectful of my home, and charged a fair price. When they finished, my yard looked like a picture from a magazine. I already booked them for next year.",
    date: '2024-11-08',
    highlight: 'Senior homeowner relief',
  },
  {
    id: 12,
    name: 'James & Karen Peters',
    location: 'Goshen, IN',
    service: 'lawn-maintenance',
    rating: 5,
    text: "We interviewed three lawn care companies before choosing Broadview, and we're so glad we did. They were the only ones who actually walked our property and pointed out specific issues — thin spots, drainage problems, proper mowing height. That expertise sold us immediately.",
    date: '2025-04-05',
    highlight: 'Chose after comparing 3 companies',
  },
  {
    id: 13,
    name: 'Michael Torres',
    location: 'Elkhart, IN',
    service: 'snow-plowing',
    rating: 5,
    text: "Last winter, we had a surprise ice storm at 2 AM. By the time I woke up at 6, Broadview had already cleared our driveway and salted the walk. I didn't even have to call them — they were monitoring the weather and dispatched automatically. That's next-level service you won't get from the big chains.",
    date: '2025-01-05',
    highlight: 'Proactive weather monitoring',
  },
  {
    id: 14,
    name: 'Helen Abrams',
    location: 'Wakarusa, IN',
    service: 'lawn-maintenance',
    rating: 5,
    text: "My husband passed away last year, and I was overwhelmed trying to keep up with the yard work myself. A neighbor recommended Broadview, and they have been an absolute blessing. They treat me with such kindness and respect, and my yard looks better than it has in years. I feel proud of my home again.",
    date: '2025-02-14',
    highlight: 'Widow homeowner, emotional impact',
  },
  {
    id: 15,
    name: 'Brian O\'Connor',
    location: 'Bristol, IN',
    service: 'general',
    rating: 5,
    text: "We use Broadview for everything — weekly mowing, spring and fall cleanup, and snow plowing. Having one trusted company handle all our property maintenance makes life so much simpler. No juggling multiple contractors, no wondering who to call. One team, every season, perfect results.",
    date: '2025-04-08',
    highlight: 'Full-service year-round client',
  },
  {
    id: 16,
    name: 'Susan Delaney',
    location: 'Goshen, IN',
    service: 'seasonal-cleanup',
    rating: 4,
    text: "The mulch installation Broadview did last spring completely transformed our front beds. They helped us choose the right type of mulch for our plants, installed it perfectly, and even gave us tips on keeping weeds down. Our curb appeal went from 'meh' to 'magazine-worthy' in one afternoon.",
    date: '2024-05-20',
    highlight: 'Curb appeal transformation',
  },
  {
    id: 17,
    name: 'Thomas Reed',
    location: 'Middlebury, IN',
    service: 'lawn-maintenance',
    rating: 5,
    text: "As a commercial property manager, I've worked with a lot of landscaping companies. Broadview stands out because they actually communicate. If weather delays a service, I get a text. If they notice something that needs attention, I get a call. That level of professionalism is rare in this industry.",
    date: '2025-03-30',
    highlight: 'Commercial client, praises communication',
  },
  {
    id: 18,
    name: 'Nancy Fitzgerald',
    location: 'Elkhart, IN',
    service: 'snow-plowing',
    rating: 5,
    text: "Our HOA board hired Broadview for snow removal across our 24-unit community last winter. The response was phenomenal — every driveway, walkway, and common area was cleared promptly after every storm. Residents stopped complaining and started complimenting us. We'll definitely renew the contract.",
    date: '2025-03-01',
    highlight: 'HOA board decision',
  },
  {
    id: 19,
    name: 'Christopher & Emily Blake',
    location: 'Goshen, IN',
    service: 'lawn-maintenance',
    rating: 5,
    text: "We just moved to Goshen from Chicago and bought our first home with an actual yard. Broadview came out, walked us through everything our lawn needed, and set up a maintenance plan that fit our budget. Six months later, our lawn is the envy of the neighborhood. Couldn't recommend them more.",
    date: '2025-04-12',
    highlight: 'New homeowners',
  },
  {
    id: 20,
    name: 'Ruth Cassidy',
    location: 'Wakarusa, IN',
    service: 'seasonal-cleanup',
    rating: 5,
    text: "I was hesitant to hire help for yard work — I'm pretty particular about how things look. But Broadview listened to every detail, followed my instructions to the letter, and somehow made everything look even better than I imagined. They earned my trust completely. Now I just enjoy the results.",
    date: '2024-10-25',
    highlight: 'Particular homeowner impressed',
  },
  {
    id: 21,
    name: 'Daniel Warren',
    location: 'Bristol, IN',
    service: 'general',
    rating: 5,
    text: "What I love about Broadview is the little things. They close our gate every time. They move our trash cans back from the curb after service. They noticed our elderly neighbor struggling with her mailbox and fixed it without charging her. That's not just a lawn company — that's good people.",
    date: '2025-04-01',
    highlight: 'Neighbors helping neighbors',
  },
  {
    id: 22,
    name: 'Lisa Harmon',
    location: 'Goshen, IN',
    service: 'lawn-maintenance',
    rating: 4,
    text: "Fair pricing, reliable service, and a crew that doesn't blast loud music or leave messes behind. We've had bad experiences with other companies, but Broadview restored our faith in lawn care services. They do what they say they'll do, when they say they'll do it. Simple as that.",
    date: '2024-08-15',
    highlight: 'Restored faith after bad experience',
  },
  {
    id: 23,
    name: 'Frank Deluca',
    location: 'Elkhart, IN',
    service: 'snow-plowing',
    rating: 5,
    text: "I own a small retail strip in Elkhart, and winter safety is a huge liability concern. Broadview's snow service keeps our parking lot and walkways clear before we even open. Not once last winter did I have to worry about a customer slipping. That's peace of mind you can't put a price on.",
    date: '2025-02-20',
    highlight: 'Retail owner, liability protection',
  },
  {
    id: 24,
    name: 'Martha Jenkins',
    location: 'Middlebury, IN',
    service: 'lawn-maintenance',
    rating: 5,
    text: "After hip surgery, I couldn't push a mower for the whole season. Broadview stepped in and treated my property like it was their own grandmother's home. They were gentle, thorough, and always made sure I could see out my windows clearly. When I recovered, I kept them anyway — they're just that good.",
    date: '2025-03-18',
    highlight: 'Post-surgery homeowner',
  },
];

export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: 156,
  bestRating: 5,
  worstRating: 1,
};

export const getTestimonialsByService = (service: Testimonial['service']) => {
  return testimonials.filter((t) => t.service === service);
};

export const getFeaturedTestimonials = (count: number = 6) => {
  return testimonials
    .filter((t) => t.rating === 5)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

export const getRecentTestimonials = (count: number = 6) => {
  return [...testimonials]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};