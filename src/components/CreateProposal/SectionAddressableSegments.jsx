import { useState, memo } from 'react';
import { Card, CardHeader, CardContent, IconButton, Grid2, Accordion, AccordionSummary, AccordionDetails, Checkbox, FormGroup, FormControlLabel, TextField, Typography, Chip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Info, ExpandMore } from '@mui/icons-material';
import { CustomizedTooltipSmall } from '@helperFunctions/CustomTooltips';


const categoriesData = [
    {
        category: 'Demographic',
        subcategories: [
            {
                subcategory: 'Age Range',
                options: ['18-20', '21-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75+']
            },
            {
                subcategory: 'Education',
                options: ['Primary Education', 'Secondary Education', 'College Education']
            },
            {
                subcategory: 'Employment Role',
                options: [ 'Work from Home', 'Director/Managerial', 'Homemaker/Domestic Work', 'Office Worker', 'Part-Time Worker', 'Professional', 'Public Sector', 'Retired', 'Self Employed', 'Shop Worker', 'Skilled/Manual Work', 'Student', 'Unemployed' ]
            },
            {
                subcategory: 'Employment Status',
                options: [ 'Retired', 'Student', 'Part-Time', 'Full-Time', 'Self-Employed', 'Unemployed/Job Seeker', 'Unemployed', 'Military', 'Veteran' ]
            },
            {
                subcategory: 'Gender',
                options: [ 'Female', 'Male', 'Unknown Gender' ]
            },
            {
                subcategory: 'Household Income (USD)',
                options: [ 'Less than $10,000', '$10,000-$14,999', '$15,000-$19,999', '$20,000 - $39,999', '$40,000 - $49,999', '$50,000 - $74,999', '$75,000 - $99,999', '$100,000 - $149,999', '$150,000-$174,999', '$175,000-$199,999', '$200,000-$249,999', '$250,000+' ]
            },
            {
                subcategory: 'Length of Residence',
                options: [ 'Less Than 1 Year', '1 year', '2 years', '3 years', '4 years', '5 years', '6 years', '7 years', '8 years', '9 years', '10 years', '11 years', '12 years', '13 years', '14 years', '15 years' ]
            },
            {
                subcategory: 'Household Data',
                options: [ 'Adults (no children)', 'Parents with Children', 'Grandparents, Parents and Children', 'Grandparents with Children', 'Empty Nest (Adults, Children left home)', '1 Adult', '2 Adults', '3+ Adults', '0 Child', '1 Child', '2 Child', '3+ Child', '1 person', '2 people', '3 people', '4 people', '5 people', '6+ People', 'Parents with Toddlers', 'Parents with Infants' ]
            },
            {
                subcategory: 'Median Home Value (USD)',
                options: [ '$0-$99,999', '$100,000-$199,999', '$200,000-$299,999', '$300,000-$399,999', '$400,000-$499,999', '$500,000-$599,999', '$600,000-$699,999', '$700,000-$799,999', '$800,000-$899,999', '$900,000-$999,999', '$1,000,000+' ]
            },
            {
                subcategory: 'Ownership',
                options: [ 'Home Owners', 'Renters', 'First Time Homeowner', 'Boat Owner', 'Intent to sell House' ]
            },
            {
                subcategory: 'Property Type',
                options: ['Multiple Family', 'Single Family']
            },
            {
                subcategory: 'Urbanization',
                options: ['Rural']
            },
            {
                subcategory: 'Marital Status',
                options: ['Co-Habiting', 'Married', 'Single']
            },
            {
                subcategory: 'Income (USD)',
                options: [ '$10,000-$14,999', '$15,000-$19,999', '$20,000 - $39,999', '$40,000 - $49,999', '$50,000 - $74,999', '$75,000 - $99,999', '$100,000 - $149,999', '$150,000-$174,999', '$175,000-$199,999', '$200,000-$249,999', '$250,000+' ]
            },
            {
                subcategory: 'Personal Level Affluence (USD)',
                options: [ 'Less than $10,000', '$10,000-$14,999', '$15,000-$19,999', '$20,000 - $39,999', '$40,000 - $49,999', '$50,000 - $74,999', '$75,000 - $99,999', '$100,000 - $149,999', '$150,000-$174,999', '$175,000-$199,999', '$200,000-$249,999', '$250,000-$500,000', '$500,000-$1,000,000', '$1,000,000+' ]
            },
            {
                subcategory: 'Personal Level Affluence Band',
                options: [ 'Negative Net Worth', 'Very Low Net Worth', 'Low Net Worth', 'Mid Net Worth', 'High Net Worth', 'Super High Net Worth' ]
            },
            {
                subcategory: 'Ethnicity',
                options: [ 'African American', 'Asian', 'Asian American', 'Central or Southwest Asian', 'Eastern European', 'Far East Asian', 'Hispanic or Latino', 'Indian', 'Mediterranean', 'Middle Eastern', 'Native American', 'Polynesian', 'Scandinavian', 'Southeast Asian', 'Western European' ]
            },
            {
                subcategory: 'Language',
                options: [ 'Arabic', 'Bengali', 'Bosnian', 'Bulgarian', 'Chinese (Mandarin, Cantonese, Other)', 'Croatian', 'Czech', 'Danish', 'Dutch', 'English', 'Finnish', 'French', 'German', 'Greek', 'Hebrew', 'Hindi', 'Hungarian', 'Indonesian', 'Italian', 'Japanese', 'Korean', 'Malay', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Russian', 'Serbian', 'Slovak', 'Slovenian', 'Spanish', 'Spanish Bilingual', 'Swahili', 'Swedish', 'Thai', 'Turkish', 'Vietnamese' ]
            },
            {
                subcategory: 'Occupation',
                options: ['Account Executive', 'Accountant', 'Accounting/Biller/Billing Clerk', 'Advertising', 'Analyst', 'Architect', 'Armed Forces', 'Auditor', 'Auto Mechanic', 'Baker', 'Banker', 'Barber/Hairstylist/Beautician', 'Bartender', 'Blue Collar Worker', 'Broker/Stock/Trader', 'Carpenter/Furniture/Woodworking', 'CEO/CFO/Chairman/Corp Officer', 'Child Care/Day Care/Babysitter', 'Chiropractor', 'Clerk', 'Computer Programmer', 'Construction', 'Consultant/Advisor', 'Contractor', 'Cook', 'Customer Service/Representative', 'Dental Assistant', 'Dentist', 'Driver/Truck Driver', 'Educator', 'Electrician', 'Engineer', 'Finance', 'Food Service', 'Gardener/Landscaper', 'Health Care', 'Insurance/Agent', 'Legal/Attorney/Lawyer', 'Nurse', 'Optometrist', 'Pharmacist/Pharmacy', 'Pilot', 'Plumber', 'Police/Trooper', 'Psychologist', 'Real Estate/Realtor', 'Sales', 'Social Worker/Case Worker', 'Teacher', 'Therapist', 'Veterinarian', 'Mental Health Professional', 'Farmers']
            },
            {
                subcategory: 'Political Affiliation',
                options: ['Democrat', 'Independent', 'Republican', 'Conservative', 'Liberal', 'Moderates']
            },
            {
                subcategory: 'Pet Owner',
                options: ['Cat Owner', 'Dog Owner', 'Other Pet Owner']
            },
            {
                subcategory: 'Characteristics',
                options: ['Charitable Donors', 'Political Donors', 'GOP Political Donors', 'Dem Political Donors']
            },
            {
                subcategory: 'Affiliations',
                options: ['Union Members', 'Small Business Owners']
            },
            {
                subcategory: 'Registration & Partisanship',
                options: ['Registered Voters', 'Unregistered/Voter Prospects', 'Social Liberal', 'Social Conservative']
            },
            {
                subcategory: 'Voting Habits',
                options: ['Likely to Vote', 'Unlikely to Vote', 'Likely to Vote Democrat', 'Likely to Vote Republican', 'Likely to Vote Independent']
            },
            {
                subcategory: 'Religion',
                options: ['Catholic', 'Jewish']
            }
        ]
    },
    {
        category: 'Interest',
        subcategories: [
            {
                subcategory: 'Academic Interests',
                options: ['Counseling', 'History', 'Music and Art', 'Philosophy', 'Language Learning', 'Animals and Veterinary Science', 'Biology', 'Medicine and Healthcare', 'Nutrition', 'Clinical Science', 'Genetics', 'Electrical Engineering', 'Mechanical Engineering', 'Chemistry', 'Environmental Science and Sustainability', 'Research Methods', 'Geography', 'Geology', 'Physics', 'Space and Astronomy', 'Psychology', 'International Relations', 'Research Paper Writing', 'Statistics', 'Law', 'Economics', 'Education', 'Governance and Society']
            },
            {
                subcategory: 'Automotive',
                options: ['Auto Buying and Selling', 'Auto Shows', 'Auto Technology', 'Budget Cars', 'Car Culture', 'Classic Cars', 'Driverless Cars', 'Green Vehicles', 'Luxury Cars', 'Motorcycles', 'Performance Cars', 'Scooters']
            },
            {
                subcategory: 'Books and Literature',
                options: ['Art and Photography Books', 'Biographies', 'Children\'s Literature', 'Comics and Graphic Novels', 'Cookbooks', 'Fiction', 'Poetry', 'Travel Books', 'Young Adult Literature']
            },
            {
                subcategory: 'Business',
                options: ['Business Accounting & Finance', 'Human Resources', 'Large Business', 'Logistics', 'Marketing and Advertising', 'Sales', 'Small and Medium-sized Business', 'Startups', 'Business Administration', 'Angel Investment', 'Bankruptcy', 'Business Loans', 'Debt Factoring & Invoice Discounting', 'Mergers and Acquisitions', 'Private Equity', 'Venture Capital', 'Business I.T.', 'Business Operations', 'Consumer Issues', 'Executive Leadership & Management', 'Government Business', 'Green Solutions', 'Business Utilities']
            },
            {
                subcategory: 'Economy',
                options: ['Commodities', 'Currencies', 'Financial Crisis', 'Financial Reform', 'Financial Regulation', 'Gasoline Prices', 'Housing Market', 'Interest Rates', 'Job Market']
            },
            {
                subcategory: 'Industries',
                options: ['Advertising Industry', 'Education Industry', 'Entertainment Industry', 'Environmental Services Industry', 'Financial Industry', 'Food Industry', 'Healthcare Industry', 'Hospitality Industry', 'Information Services Industry', 'Legal Services Industry', 'Logistics and Transportation Industry', 'Agriculture', 'Management Consulting Industry', 'Manufacturing Industry', 'Mechanical and Industrial Engineering Industry', 'Media Industry', 'Metals Industry', 'Non-Profit Organizations', 'Pharmaceutical Industry', 'Power and Energy Industry', 'Publishing Industry', 'Real Estate Industry', 'Apparel Industry', 'Retail Industry', 'Technology Industry', 'Telecommunications Industry', 'Automotive Industry', 'Aviation Industry', 'Biotech and Biomedical Industry', 'Civil Engineering Industry', 'Construction Industry', 'Defense Industry']
            },
            {
                subcategory: 'Careers',
                options: ['Apprenticeships', 'Career Advice', 'Career Planning', 'Remote Working', 'Vocational Training']
            },
            {
                subcategory: 'Education',
                options: ['Adult Education', 'Language Learning', 'Online Education']
            },
            {
                subcategory: 'Parenting',
                options: ['Daycare and Pre-School', 'Internet Safety', 'Parenting Babies and Toddlers', 'Parenting Children Aged 4-11', 'Parenting Teens', 'Children with Special Needs']
            },
            {
                subcategory: 'Fine Art',
                options: ['Costume', 'Dance', 'Design', 'Digital Arts', 'Fine Art Photography', 'Modern Art', 'Opera', 'Theater']
            },
            {
                subcategory: 'Food & Drink',
                options: ['Alcoholic Beverages', 'Barbecues and Grilling', 'Cooking', 'Desserts and Baking', 'Dining Out', 'Food Allergies', 'Food Movements', 'Healthy Cooking and Eating', 'Non-Alcoholic Beverages', 'Vegan Diets', 'Vegetarian Diets', 'World Cuisines']
            },
            {
                subcategory: 'Medical Services',
                options: ['Health Services','Elder Care','Vision Care','Dental Care','Massage Therapists','Physical Therapists','Chiropractors','Hospitals','Smoking Cessation','Hair Loss Treatments','Mental Health','Pain Management','Orthopedics','Back Pain','Arthritis']
            },
            {
                subcategory: 'Healthy Living',
                options: ["Children's Health", "Participant Sports", "Running and Jogging", "Men's Health", "Nutrition", "Senior Health", "Weight Loss", "Herbs and Supplements", "Holistic Health", "Physical Therapy", "Smoking Cessation", "Women's Health", "Active and Healthy Living", "CrossFit US"]
            },
            {
                subcategory: 'Hobbies & Interests',
                options: ["Antiquing and Antiques", "Beadwork", "Candle and Soap Making", "Drawing and Sketching", "Jewelry Making", "Needlework", "Painting", "Photography", "Scrapbooking", "Woodworking", "Beekeeping", "Birdwatching", "Cigars", "Comic Books", "Stamps and Coins", "Audio Production", "Freelance Writing", "Screenwriting", "Video Production", "Board Games and Puzzles", "Card Games", "Roleplaying Games", "Genealogy and Ancestry", "Magic and Illusion", "Model Toys", "Musical Instruments", "Paranormal Phenomena", "Radio Control", "Sci-fi and Fantasy", "Workshops and Classes"]
            },
            {
                subcategory: 'Home & Garden',
                options: ["Gardening", "Home Entertaining", "Home Improvement", "Interior Decorating", "Landscaping", "Outdoor Decorating", "Remodeling & Construction", "Smart Home"]
            },
            {
                subcategory: 'Movies',
                options: ["Action and Adventure Movies", "Animation Movies", "Comedy Movies", "Crime and Mystery Movies", "Documentary Movies", "Drama Movies", "Family and Children Movies", "Fantasy Movies", "Horror Movies", "Indie and Arthouse Movies", "Romance Movies", "Science Fiction Movies", "World Movies"]
            },
            {
                subcategory: 'Music and Audio',
                options: ["Adult Album Alternative", "Soft AC Music", "Urban AC Music", "Alternative Music", "Blues", "Children's Music", "Classic Hits", "Classical Music", "College Radio", "Comedy (Music and Audio)", "Contemporary Hits/Pop/Top 40", "Country Music", "Dance and Electronic Music", "Gospel Music", "Hip Hop Music", "Inspirational/New Age Music", "Jazz", "Oldies/Adult Standards", "R&B/Soul/Funk", "Reggae", "Religious (Music and Audio)", "Alternative Rock", "Classic Rock", "Hard Rock", "Soft Rock", "Songwriters/Folk", "Soundtracks, TV and Showtunes", "Sports Radio", "Business News Radio", "Educational Radio", "News Radio", "News/Talk Radio", "Public Radio", "Urban Contemporary Music", "Variety (Music and Audio)", "World/International Music"]
            },
            {
                subcategory: 'News and Politics',
                options: ["Crime", "Disasters", "International News", "Law", "Local News", "National News", "Elections", "Political Issues", "War and Conflicts", "Weather"]
            },
            {
                subcategory: 'Personal Finance',
                options: ["Frugal Living", "Insurance", "Personal Debt", "Personal Investing", "Personal Taxes", "Retirement Planning", "Medical Insurance Policy Holders", "Debt Management"]
            },
            {
                subcategory: 'Pets',
                options: ["Birds", "Cats", "Dogs", "Fish and Aquariums", "Horses and Equine", "Large Animals", "Pet Adoptions", "Reptiles", "Pet Accessories", "Pet Supplies"]
            },
            {
                subcategory: 'Pop Culture',
                options: ["Humor and Satire"]
            },
            {
                subcategory: 'Real Estate',
                options: ["Apartments", "Developmental Sites", "Hotel Properties", "Houses", "Industrial Property", "Land and Farms", "Office Property", "Real Estate Buying and Selling", "Real Estate Renting and Leasing", "Retail Property", "Vacation Properties"]
            },
            {
                subcategory: 'Sports',
                options: ["American Football", "Australian Rules Football", "Motorcycle Sports", "Badminton", "Baseball", "Basketball", "Beach Volleyball", "Bodybuilding", "Bowling", "Boxing", "Cheerleading", "College Football", "College Basketball","College Baseball", "Cricket", "Cycling", "Darts", "Diving", "Horse Racing", "Canoeing and Kayaking","Climbing", "Paintball", "Scuba Diving", "Skateboarding", "Snowboarding", "Surfing and Bodyboarding","Waterskiing and Wakeboarding", "Fantasy Sports", "Field Hockey", "Figure Skating", "Fishing Sports", "Golf","Gymnastics", "Hunting and Shooting", "Ice Hockey", "Inline Skating", "Lacrosse", "Martial Arts","Summer Olympic Sports", "Winter Olympic Sports", "Poker and Professional Gambling", "Rodeo", "Rowing","Rugby League", "Rugby Union", "Sailing", "Skiing", "Snooker/Pool/Billiards", "Soccer", "Softball","Sports Equipment", "Squash", "Swimming", "Table Tennis", "Tennis", "Track and Field", "Volleyball","Walking", "Water Polo", "Weightlifting", "Wrestling", "Pickleball/Racquet Sports", "Marathon Running"]
            },
            {
                subcategory: 'Style & Fashion',
                options: ["Beauty", "Body Art", "Children's Clothing", "Designer Clothing", "Fashion Trends", "High Fashion", "Men's Fashion", "Personal Care", "Street Style", "Women's Fashion"]
            },
            {
                subcategory: 'Technology & Computing',
                options: ["Artificial Intelligence", "Augmented Reality", "Internet", "Cloud Computing", "Web Development", "Web Hosting", "Email", "Internet for Beginners", "Internet of Things", "IT and Internet Support", "Search", "Social Networking", "Web Design and HTML", "Programming Languages", "Consumer Electronics", "Robotics", "Virtual Reality"]
            },
            {
                subcategory: 'Television',
                options: ["Animation TV", "Children's TV", "Comedy TV", "Drama TV", "Factual TV", "Holiday TV", "Music TV", "Reality TV", "Science Fiction TV", "Soap Opera TV", "Special Interest TV", "Sports TV"]
            },
            {
                subcategory: 'Travel',
                options: ["Adventure Travel", "Africa Travel", "Asia Travel", "Australia and Oceania Travel", "Beach Travel", "Camping", "Day Trips", "Europe Travel", "Family Travel", "North America Travel", "Polar Travel", "Road Trips", "South America Travel"]
            },
            {
                subcategory: 'Video Gaming',
                options: ["Console Games", "eSports", "Mobile Games", "PC Games", "Action Video Games", "Role-Playing Video Games", "Simulation Video Games", "Sports Video Games", "Strategy Video Games", "Action-Adventure Video Games", "Adventure Video Games", "Casual Games", "Educational Video Games", "Exercise and Fitness Video Games", "MMOs", "Music and Party Video Games", "Puzzle Video Games"]
            },
            {
                subcategory: 'Issues',
                options: ["Supports Green Energy", "Supports Renewable Energy", "Supports Climate Change Action", "Supports Environmental Restoration", "Pro Trump", "Anti Trump", "Pro Biden", "Anti Biden", "Support Immigration Reform", "Pro-Choice", "Pro-Life", "LGBTQ Rights", "Support Gun Control", "Pro 2nd Amendment", "Support Campaign Finance Reform", "Supports Marijuana Reform", "Supports Education Reform", "Interest in National Security", "Interest in Economy & Unemployment", "Interest in Labour Laws", "Interest in Human Rights", "Interest in Child Welfare"]
            },
            {
                subcategory: 'Personal Habits',
                options: ["Heavy Social Media Users", "Non Social Media Users", "Heavy TV Users", "Low TV Users", "High Usage Streamers", "Likely Streaming Users", "Likely Cable Subscribers", "Stream Only, No TV (Cord Cutter)", "Newspaper Readers", "Light Newspaper Readers", "Watches Political TV - Liberal", "Watches Political TV - Conservative", "Interest in Financial News"]
            }
        ]
    },
    {
        category: 'Purchase Intent',
        subcategories: [
            {
                subcategory: 'Apps',
                options: ["Auto and Vehicles Apps", "Books Apps", "Business Apps", "Education Apps","Entertainment Apps", "Finance Apps", "Food and Drink Apps", "Health and Fitness Apps", "Lifestyle Apps", "Magazine and Newspapers Apps","Medical Apps", "Music Apps", "Navigation Apps", "Productivity Apps", "Reference Apps", "Search Engine Apps", "Shopping Apps", "Social Networking Apps", "Sports Apps", "Weather Apps"]
            },
            {
                subcategory: 'Arts and Entertainment',
                options: ["Blogs/Forums/Social Networks", "Culture and Fine Arts", "Concerts","Theatre and Musicals", "Museums and Galleries", "Sporting Events", "Cinemas and Movie Events", "Aviation Shows", "Fairs and Farmer's Markets", "Exhibitions", "Theme and Amusement Parks", "Parks and Wildlife", "Auto Shows", "Nightclubs", "Fashion Events", "Comedy Events", "Zoos and Aquariums", "Fan Conventions", "Fantasy Sports", "Music and Video Streaming Services", "Online Entertainment", "Ticket Services", "TV"]
            },
            {
                subcategory: 'New Vehicles',
                options: ["Commercial Trucks", "Sedan", "Station Wagon", "SUV", "Van", "Convertible", "Coupe", "Crossover", "Hatchback", "Microcar", "Minivan", "Off-Road Vehicles", "Pickup Trucks", "Budget Cars", "Classic Cars", "Driverless Cars", "Green Vehicles", "Luxury Cars", "Performance Cars", "Motorbikes", "Other Vehicles"]
            },
            {
                subcategory: 'Pre-Owned Vehicles',
                options: ["Commercial Trucks", "Sedan", "Station Wagon", "SUV", "Van", "Convertible", "Coupe", "Crossover", "Hatchback", "Microcar", "Minivan", "Off-Road Vehicles", "Pickup Trucks", "Budget Cars", "Classic Cars", "Green Vehicles", "Luxury Cars", "Performance Cars", "Motorbikes", "Other Vehicles"]
            },
            {
                subcategory: 'Automotive Products',
                options: ["Automotive Care Products", "Car Seats", "Car Speakers"]
            },
            {
                subcategory: 'Automotive Services',
                options: ["Auto Rental", "Car Wash"]
            },
            {
                subcategory: 'Beauty Services',
                options: ["Beauty Salons and Tanning", "Hair Salons", "Nail Salons", "Piercing and Tattooing", "Spas"]
            },
            {
                subcategory: 'Business and Industrial',
                options: ["Advertising and Marketing", "Auctions", "Conferences/Events/Seminars", "Construction", "Oil, Gas and Consumable Fuels", "Electric Power Industry", "Forestry and Logging", "Government", "Human Resources", "Industrial Storage", "Aerospace and Defense", "Construction and Engineering", "Industrial Conglomerates", "Trading Companies and Distributors", "Transportation", "Laundry and Dry Cleaning Services", "Law Enforcement", "Manufacturing", "Material Handling", "Medical and Biotechnology", "Mining and Quarrying", "Photographers", "Cell Phone Stores", "Music Stores", "Shopping Malls", "Department Stores", "Specialty Stores", "Pawn Shops", "Signage", "Small Business"]
            },
            {
                subcategory: 'Clothing and Accessories',
                options: ["Children's Clothing", "Men's Clothing", "Women's Clothing", "Sportswear", "Clothing Accessories", "Costumes", "Footwear", "Handbags and Wallets", "Jewelry and Watches", "Sunglasses"]
            },
            {
                subcategory: 'Collectables and Antiques',
                options: ["Antiques", "Collectibles", "Sports Memorabilia", "Stamps"]
            },
            {
                subcategory: 'Consumer Electronics',
                options: ["Headphones", "Cameras", "Laptops", "Desktops", "E-Readers", "Home Theater Systems", "Tablets", "Televisions", "Camcorders", "Video Games and Consoles"]
            },
            {
                subcategory: 'Coffee & Tea',
                options: ["Coffee", "Coffee Creamer", "Coffee Filters"]
            },
            {
                subcategory: 'Drink Mixes',
                options: ["Cocktail Mixes", "Drink Mixes"]
            },
            {
                subcategory: 'Juices',
                options: ["Bottled Juices", "Canned Juices", "Juice/Drink Concentrate"]
            },
            {
                subcategory: 'Non-Fruit Drinks',
                options: ["Non-Fruit Drinks", "Powdered Milk"]
            },
            {
                subcategory: 'Sports/Energy Drinks',
                options: ["Energy Drinks", "Sports Drinks"]
            },
            {
                subcategory: 'Water',
                options: ["Bottled Water"]
            },
            {
                subcategory: 'Frozen Baked Goods',
                options: ["Cookies", "Pies"]
            },
            {
                subcategory: 'Frozen Beverages',
                options: ["Juices"]
            },
            {
                subcategory: 'Frozen Desserts',
                options: ["Desserts/Toppings", "Ice Cream/Sherbet", "Novelties"]
            },
            {
                subcategory: 'Frozen Fruits & Vegetables',
                options: ["Fruit", "Plain Vegetables", "Potatoes/Onions", "Prepared Vegetables"]
            },
            {
                subcategory: 'Frozen Meals',
                options: ["Breakfast Food", "Dinners/Entrees", "Pasta", "Pizza", "Soups/Sides/Other"]
            },
            {
                subcategory: 'Frozen Meat/Poultry/Seafood',
                options: ["Meat", "Poultry", "Processed Poultry", "Seafood"]
            },
            {
                subcategory: 'Frozen Snacks',
                options: ["Appetizers/Snack Rolls", "Other Snacks"]
            },
            {
                subcategory: 'Bakery',
                options: ["Bagels/Bialys", "Bakery Snacks", "English Muffins", "Fresh Bread & Rolls", "Pastry/Doughnuts", "Pies & Cakes"]
            },
            {
                subcategory: 'Baking',
                options: ["Baking Mixes", "Baking Needs", "Baking Nuts", "Dessert Toppings", "Egg Substitute", "Flour/Meal", "Frosting", "Ice Cream Cones/Mixes", "Marshmallows", "Shortening & Oil", "Spices/Seasonings", "Sugar", "Sugar Substitutes"]
            },
            {
                subcategory: 'Breakfast',
                options: ["Cold cereal", "Hot Cereal", "Pancake Mixes", "Syrup", "Toaster Pastries/Tarts"]
            },
            {
                subcategory: 'Candy',
                options: ["Breath Fresheners", "Chocolate Candy", "Gum", "Non-Chocolate Candy"]
            },
            {
                subcategory: 'Condiments & Sauces',
                options: ["Barbeque Sauce", "Gravy/Sauce Mixes", "Mayonnaise", "Mustard & Ketchup", "Nut Butter", "Other Sauces", "Pickles/Relish/Olives", "Salad Dressing", "Salad Toppings and Croutons", "Steak/Worcestershire Sauce", "Vinegar"]
            },
            {
                subcategory: 'Cookies & Crackers',
                options: ["Cookies", "Crackers"]
            },
            {
                subcategory: 'Meals',
                options: ["Baked Beans/Canned Bread", "Dinners", "Dry Packaged Dinner Mixes", "Grated Cheese", "Instant Potatoes", "Meat", "Pasta", "Pizza Products", "Rice", "Seafood", "Soup", "Spaghetti/Italian Sauce", "Stuffing Mixes"]
            },
            {
                subcategory: 'Snacks',
                options: ["Dip/Dip Mixes", "Dried Meat Snacks", "Dry Fruit Snacks", "Other Snacks", "Popcorn/Popcorn Oil", "Rice/Popcorn Cakes", "Salty Snacks", "Snack Bars/Granola Bars", "Snack Nuts/Seeds/Corn Nuts"]
            },
            {
                subcategory: 'Fruit',
                options: ["Canned/Bottled Fruit", "Dried Fruit"]
            },
            {
                subcategory: 'Vegetables',
                options: ["Tomato Products", "Vegetables", "Refrigerated"]
            },
            {
                subcategory: 'Dairy',
                options: ["Cottage Cheese", "Creams/Creamers", "Fresh Eggs", "Margarine/Spreads", "Milk", "Natural Cheese", "Processed Cheese", "Sour Cream", "Whipped Toppings", "Yogurt"]
            },
            {
                subcategory: 'Refrigerated Baked Goods',
                options: ["Baked Goods"]
            },
            {
                subcategory: 'Refrigerated Beverages',
                options: ["Juices/Drinks", "Tea/Coffee"]
            },
            {
                subcategory: 'Refrigerated Condiments',
                options: ["Dips"]
            },
            {
                subcategory: 'Refrigerated Desserts',
                options: ["Cheesecakes", "Desserts"]
            },
            {
                subcategory: 'Refrigerated Dough',
                options: ["Dough/Biscuit Dough", "Pizza"]
            },
            {
                subcategory: 'Refrigerated Meals',
                options: ["Entrees", "Lunches", "Meat Pies", "Pasta", "Side Dishes"]
            },
            {
                subcategory: 'Refrigerated Meats',
                options: ["Breakfast Meats", "Dinner Sausage", "Frankfurters", "Ham", "Luncheon Meats", "Meat", "Seafood"]
            },
            {
                subcategory: 'Cosmetics',
                options: ["Storage", "Eye", "Facial", "Lip", "Cosmetics Accessories"]
            },
            {
                subcategory: 'Grooming Supplies',
                options: ["Cotton Balls/Swabs", "Hair Appliances", "Other Grooming Supplies"]
            },
            {
                subcategory: 'Hair Care',
                options: ["Hair Accessories", "Hair Coloring", "Hair Conditioner", "Hair Growth Products", "Hair Spray/Spritz", "Hair Styling Gel/Mousse", "Home Permanent/Relaxer Kits", "Shampoo"]
            },
            {
                subcategory: 'Personal Cleansing',
                options: ["Bath Products", "Bath/Body Scrubbers/Massagers", "Deodorant", "Moist Towelettes", "Soap"]
            },
            {
                subcategory: 'Shaving',
                options: ["Blades", "Razors", "Shaving Cream"]
            },
            {
                subcategory: 'Skin Care',
                options: ["Hand & Body Lotion", "Suntan Products"]
            },
            {
                subcategory: 'Barbeque',
                options: ["Charcoal"]
            },
            {
                subcategory: 'Electronics/Photography',
                options: ["Batteries", "Photography Supplies"]
            },
            {
                subcategory: 'Foils, Wraps, & Bags',
                options: ["Foil Pans", "Foils & Wraps", "Food & Trash Bags"]
            },
            {
                subcategory: 'Hosiery',
                options: ["Socks", "Tights"]
            },
            {
                subcategory: 'Household/Plastics/Storage',
                options: ["Bottles", "Drinkware", "Household Plastics", "Kitchen Storage", "Soap Dishes"]
            },
            {
                subcategory: 'Miscellaneous General Merch',
                options: ["Candles", "Culinary", "Flashlights", "Gloves", "Household Lubricants", "Light Bulbs", "Outdoor/Lawn Fertilizer/Weed Killer", "Playing Cards", "Pool/Spa Chemicals", "Shoe Polish & Accessories", "Pain Reliever"]
            },
            {
                subcategory: 'Office/School Supplies',
                options: ["Office Products", "Writing Instruments"]
            },
            {
                subcategory: 'Paper Products',
                options: ["Facial Tissue", "Paper Napkins", "Paper Towels", "Toilet Tissue"]
            },
            {
                subcategory: 'Pest Control',
                options: ["Outdoor Insect/Rodent Control Chem"]
            },
            {
                subcategory: 'Pet Care',
                options: ["Cat Litter", "Pet Food", "Pet Supplies", "Pet Treats"]
            },
            {
                subcategory: 'Water Treatment',
                options: ["Water Filters/Devices", "Water Softeners/Treatment"]
            },
            {
                subcategory: 'Household Appliances',
                options: ["Air Conditioners", "Blenders", "Coffee Makers", "Dehumidifiers", "Dishwashers", "Fans", "Freezers", "Heaters", "Juicers", "Microwave Ovens", "Mixers", "Ovens", "Ranges", "Refrigerators", "Vacuums", "Washers and Dryers"]
            },
            {
                subcategory: 'Household Cleaning',
                options: ["Cleaning Tools/Mops/Brooms", "Dish Detergent", "Household Cleaner", "Household Cleaner Cloths", "Rug/Upholstery/Fabric Treatment", "Sponges & Scouring Pads"]
            },
            {
                subcategory: 'Laundry',
                options: ["Bleach", "Fabric Softener", "Laundry Care", "Laundry Detergent"]
            },
            {
                subcategory: 'Home and Garden Products',
                options: ["Bathroom Accessories", "Home Decor", "Bedroom Furniture", "Fireplaces", "Lighting", "Plants", "Housewares", "Rugs and Carpets"]
            },
            {
                subcategory: 'Baby and Toddler Products',
                options: ["Baby Bath Products", "Baby Gift Sets", "Diapers"]
            },
            {
                subcategory: 'Media',
                options: ["Magazines and Newspapers", "DVDs", "Audio Books", "Vinyl Records"]
            },
            {
                subcategory: 'Toys and Games',
                options: ["Games", "Outdoor Play Equipment", "Puzzles", "Toys"]
            },
            {
                subcategory: 'Education and Careers',
                options: ["Adult Education", "Career Improvement and Advice", "Colleges and Universities", "Employment Agencies", "Language Learning", "Online Education", "Teaching Resources"]
            },
            {
                subcategory: 'Family and Parenting',
                options: ["Kids Activities"]
            },
            {
                subcategory: 'Finance and Insurance',
                options: ["Accountants", "Banking", "Credit Cards", "Auto Insurance", "Home Insurance", "Life Insurance", "Medical Insurance", "Payday Loans", "Retirement Planning", "Student Financial Aid", "Tax Preparation Services"]
            },
            {
                subcategory: 'Food and Beverage Services',
                options: ["Bakeries", "Bars", "Catering", "Fast Food", "Food Delivery Services", "Restaurants"]
            },
            {
                subcategory: 'Furniture',
                options: ["Cabinets", "Chairs", "Outdoor Furniture", "Shelving", "Sofas", "Tables"]
            },
            {
                subcategory: 'Gifts and Holiday Items',
                options: ["Flowers", "Gift Baskets", "Gift Cards", "Greeting Cards", "Party Goods"]
            },
            {
                subcategory: 'Hardware Supplies',
                options: ["Building Materials", "Building Supplies", "Electrical Equipment", "Hardware Accessories", "Machinery", "Plumbing Supplies", "Tools"]
            },
            {
                subcategory: 'Health and Medical Services',
                options: ["Chiropractors", "Dental Care", "Elder Care", "Hair Loss", "Health Services", "Hospitals", "Massage Therapists", "Physical Therapists", "Smoking Cessation", "Vision Care"]
            },
            {
                subcategory: 'Hobbies and Interests',
                options: ["Arts and Crafts", "Musical Instruments", "Workshops and Classes"]
            },
            {
                subcategory: 'Home and Garden Services',
                options: ["Appliance Repair", "Emergency Preparedness", "Landscaping Services", "Plumbers", "Remodeling and Construction"]
            },
            {
                subcategory: 'Legal Services',
                options: ["Attorneys"]
            },
            {
                subcategory: 'Life Events',
                options: ["Anniversary", "Birthdays", "Births", "Graduations", "Weddings"]
            },
            {
                subcategory: 'Logistics and Delivery',
                options: ["Shipping Services", "Storage Facilities"]
            },
            {
                subcategory: 'Non-Profits',
                options: ["NGOs"]
            },
            {
                subcategory: 'Office Equipment and Supplies',
                options: ["Office Furniture", "Stationery"]
            },
            {
                subcategory: 'Pet Services',
                options: ["Pet Grooming", "Pet Stores", "Veterinary Services"]
            },
            {
                subcategory: 'Real Estate',
                options: ["Commercial Real Estate", "Real Estate Sales", "Residential Real Estate"]
            },
            {
                subcategory: 'Recreation and Fitness Activities',
                options: ["Dance Studios", "Gyms and Health Clubs", "Personal Trainers", "Yoga Studios"]
            },
            {
                subcategory: 'Software',
                options: ["3-D Graphics", "Photo Editing Software", "Shareware and Freeware", "Video Software", "Web Conferencing", "Antivirus Software", "Browsers", "Computer Animation", "Databases", "Desktop Publishing", "Digital Audio", "Graphics Software", "Operating Systems", "Productivity Software"]
            },
            {
                subcategory: 'Sporting Goods',
                options: ["Baseball and Softball Equipment", "Basketball Equipment", "Hockey Equipment", "Football Equipment", "Gymnastics Equipment", "Soccer Equipment", "Tennis Equipment", "Volleyball Equipment", "Camping and Hiking Equipment", "Bicycles Equipment", "Equestrian Equipment", "Fishing Equipment", "Golf Equipment", "Winter Sports Equipment"]
            },
            {
                subcategory: 'Travel and Tourism',
                options: ["Adventure Travel", "Air Travel", "Auto Rental", "Beach Travel", "Bed and Breakfasts", "Budget Travel", "Taxi Services", "Ride-sharing", "Camping", "Coach Travel", "Cruise Travel", "Day Trips", "Family Travel", "Honeymoons and Getaways", "Hotels and Resorts", "Motels", "Passenger Transportation", "Rail Travel", "Road Trips", "Spas", "Timeshares", "Travel Insurance"]
            },
            {
                subcategory: 'Web Services',
                options: ["Internet Providers", "Web Hosting"]
            },
            {
                subcategory: 'Auto Make',
                options: ["Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge", "Ferrari", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Land Rover", "Lexus", "Lincoln", "Maserati", "Mazda", "Mercedes Benz", "Mini", "Mitsubishi", "Nissan", "Porsche", "Ram", "Rolls Royce", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo"]
            },
            {
                subcategory: 'Auto Model',
                options: ["Acura ILX", "Acura MDX", "Acura NSX", "Acura RDX", "Acura RLX", "Alfa Romeo Giulia", "Alfa Romeo Stelvio", "Aston Martin DB11", "Aston Martin DBS", "Aston Martin Vantage", "Aston Martin Vanquish", "Audi A3", "Audi A4", "Audi A5", "Audi A6", "Audi A7", "Audi A8", "Audi Q3", "Audi Q4", "Audi R8", "Audi RS 2", "Audi RS 3", "Audi RS 4", "Audi RS 7", "Audi S2", "Audi S3", "Audi S4", "Audi S6", "Bentley Continental", "Bentley Flying spur", "BMW 2 Series", "BMW 3 Series", "BMW 4 Series", "BMW 5 Series", "BMW 6 Series", "BMW 7 Series", "BMW X1", "BMW X2", "BMW X3", "BMW X5", "BMW X7", "BMW Z4", "Buick Enclave", "Buick Encore", "Buick Envision", "Cadillac XT4", "Cadillac XT5", "Cadillac XT6", "Cadillac Escalade", "Chevrolet Blazer", "Chevrolet Bolt", "Chevrolet Camaro", "Chevrolet Colorado", "Chevrolet Corvette", "Chevrolet Cruze", "Chevrolet Equinox", "Chevrolet Impala", "Chevrolet Malibu", "Chevrolet Silverado 1500", "Chevrolet Silverado 2500", "Chevrolet Silverado 3500", "Chevrolet Spark", "Chevrolet Suburban", "Chevrolet Tahoe", "Chevrolet Trailblazer", "Chevrolet Traverse", "Chevrolet Trax", "Chrysler 300", "Chrysler Pacifica", "Dodge Challenger", "Dodge Charger", "Dodge Dart", "Dodge Durango", "Dodge Grand Caravan", "Dodge Journey", "Dodge Viper", "Ferrari 488 GTB", "Ferrari 488 Spider", "Fiat 500", "Ford Bronco", "Ford EcoSport", "Ford Edge", "Ford Escape", "Ford Expedition", "Ford Explorer", "Ford F150", "Ford Fiesta", "Ford Focus", "Ford Fusion", "Ford Mustang", "Ford Mustang Mach-E", "Ford Ranger", "Ford Super Duty", "Ford Taurus", "GMC Acadia", "GMC Canyon", "GMC Sierra 1500", "GMC Sierra 2500", "GMC Sierra 3500", "GMC Terrain", "GMC Yukon", "Honda Accord", "Honda Civic", "Honda CR-V", "Honda Fit", "Honda HR-V", "Honda Insight", "Honda Odyssey", "Honda Passport", "Honda Pilot", "Honda Ridgeline", "Hyundai Accent", "Hyundai Elantra", "Hyundai Genesis", "Hyundai Ioniq", "Hyundai Kona", "Hyundai Palisade", "Hyundai Santa Cruz", "Hyundai Santa Fe", "Hyundai Sonata", "Hyundai Tucson", "Hyundai Veloster", "Hyundai Venue", "Infiniti EX37", "Infiniti FX37", "Infiniti G37", "Infiniti JX35", "Infiniti M37", "Infiniti Q40", "Infiniti Q70", "Infiniti Q70L", "Infiniti QX30", "Infiniti QX50", "Infiniti QX60", "Infiniti QX70", "Infiniti QX80", "Jaguar F-Pace", "Jaguar F-Type", "Jaguar XE", "Jaguar XF", "Jaguar XJ", "Jeep Cherokee", "Jeep Compass", "Jeep Gladiator", "Jeep Grand Cherokee", "Jeep Patriot", "Jeep Renegade", "Jeep Wagoneer", "Jeep Wrangler", "Kia Carnival", "Kia Forte", "Kia K5", "Kia Niro", "Kia Optima", "Kia Rio", "Kia Sedona", "Kia Seltos", "Kia Sorento", "Kia Soul", "Kia Sportage", "Kia Stinger", "Kia Telluride", "Land Rover Defender", "Land Rover Discovery", "Land Rover Range Rover", "Lexus ES", "Lexus GS", "Lexus GX", "Lexus IS", "Lexus LS", "Lexus NX", "Lexus RX", "Lincoln Aviator", "Lincoln Corsair", "Lincoln MKC", "Lincoln MKS", "Lincoln MKT", "Lincoln MKX", "Lincoln MKZ", "Lincoln Nautilus", "Lincoln Navigator", "Mazda CS-5", "Mazda CX-3", "Mazda CX-9", "Mazda CX-30", "Mazda Mazda3", "Mazda Mazda5", "Mazda Mazda6", "Mazda MX-5", "Mercedes Benz B-Class", "Mercedes Benz C-Class", "Mercedes Benz CLA-Class", "Mercedes Benz CLS-Class", "Mercedes Benz E-Class", "Mercedes Benz GLA-Class", "Mercedes Benz GLS-Class", "Mercedes Benz S-Class", "Mini Clubman", "Mini Convertible", "Mini Countryman", "Mini Hardtop", "Mini Paceman", "Mitsubishi I-Miev", "Mitsubishi Lancer", "Mitsubishi Mirage", "Mitsubishi Outlander", "Nissan Altima", "Nissan Armada", "Nissan Frontier", "Nissan Kicks", "Nissan Leaf", "Nissan Maxima", "Nissan Pathfinder", "Nissan Rogue", "Nissan Sentra", "Nissan Titan", "Nissan Versa", "Nissan GT-R", "Porsche Cayenne", "Porsche Cayman", "Porsche Macan", "Porsche Panamera", "Porsche 718", "Porsche 911", "Ram 1500", "Ram 2500", "Ram 3500", "Subaru Ascent", "Subaru Crosstrek", "Subaru Forester", "Subaru Impreza", "Subaru Legacy", "Subaru Outback", "Subaru WRX", "Tesla Model 3", "Tesla Model S", "Tesla Model X", "Tesla Model Y", "Toyota 4Runner", "Toyota Avalon", "Toyota C HR", "Toyota Camry", "Toyota Corolla", "Toyota Highlander", "Toyota Prius", "Toyota RAV4", "Toyota Sequoia", "Toyota Sienna", "Toyota Tacoma", "Toyota Tundra", "Toyota Venza", "Toyota Yaris", "Volkswagen Atlas", "Volkswagen Beetle", "Volkswagen Golf", "Volkswagen ID.4", "Volkswagen Jetta", "Volkswagen Passat", "Volkswagen Taos", "Volkswagen Tiguan", "Volvo S60", "Volvo S80", "Volvo S90", "Volvo XC40", "Volvo XC60", "Volvo XC90" ]
            },

        ]
    }
];

function SectionAddressableSegments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedData, setSelectedData] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSubcategories, setExpandedSubcategories] = useState({});

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    console.log("event.target.value", event.target.value);
    setSearchTerm(value);

    const newExpandedCategories = {};
    const newExpandedSubcategories = {};
    
    categoriesData.forEach((category) => {
      let expandCategory = false;

      category.subcategories.forEach((subcategory) => {
        const hasMatch = subcategory.options.some((option) =>
          option.toLowerCase().includes(value)
        );

        if (hasMatch) {
          newExpandedSubcategories[subcategory.subcategory] = true;
          expandCategory = true;
        } else {
          newExpandedSubcategories[subcategory.subcategory] = false;
        }
      });

      if (expandCategory || category.category.toLowerCase().includes(value)) {
        newExpandedCategories[category.category] = true;
      } else {
        newExpandedCategories[category.category] = false;
      }
    });

    setExpandedCategories(newExpandedCategories);
    setExpandedSubcategories(newExpandedSubcategories);
  };

  const handleCategoryToggle = (category) => {
    setExpandedCategories((prevExpanded) => ({
      ...prevExpanded,
      [category]: !prevExpanded[category]
    }));
  };

  const handleSubcategoryToggle = (subcategory) => {
    setExpandedSubcategories((prevExpanded) => ({
      ...prevExpanded,
      [subcategory]: !prevExpanded[subcategory]
    }));
  };

  const handleCheckboxChange = (category, subcategory, option) => {
    setSelectedData((prevData) => {
      const exists = prevData.find(
        (item) => item.option === option && item.subcategory === subcategory
      );
      if (exists) {
        return prevData.filter((item) => item.option !== option);
      } else {
        return [...prevData, { category, subcategory, option }];
      }
    });
  };

  const handleChipDelete = (category, subcategory, option) => {
    setSelectedData((prevData) => prevData.filter(
      (item) => !(item.option === option && item.subcategory === subcategory)
    ));
  };

  const filteredData = categoriesData.filter((category) =>
    category.category.toLowerCase().includes(searchTerm) ||
    category.subcategories.some((subcategory) =>
      subcategory.options.some((option) =>
        option.toLowerCase().includes(searchTerm)
      )
    )
  );

  const renderSelectedData = () => {
    const groupedData = selectedData.reduce((acc, curr) => {
      const key = `${curr.category} > ${curr.subcategory}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(curr.option);
      return acc;
    }, {});

    const selectedChips = Object.keys(groupedData).map((key, index) => (
      <div key={index} style={{ marginBottom: '8px' }}>
        <Typography>{key}:</Typography>
        {groupedData[key].map((option, optionIndex) => (
          <>
            <Chip
              key={optionIndex}
              label={option}
              onDelete={() => handleChipDelete(key.split(' > ')[0], key.split(' > ')[1], option)}
              style={{ marginRight: '8px', marginBottom: '4px' }}
            />
            {optionIndex < groupedData[key].length - 1 && <span> OR </span>}
          </>
        ))}
      </div>
    ));

    // Add "AND" between subcategory groups
    return selectedChips.reduce((acc, curr, index) => {
      acc.push(curr);
      if (index < selectedChips.length - 1) {
        acc.push(<Typography key={`and-${index}`} style={{ fontWeight: 'bold' }}>AND</Typography>);
      }
      return acc;
    }, []);
  };

  return (
    <Card sx={{ mt: 4 }}>
    <CardHeader title={
        <>Addressable Segments
            <CustomizedTooltipSmall title="Addressable segments let you target multiple devices at the single-address level, using several data sources to create your target audience based on demographic, interest, or purchase intent. A minimum of 1 segment must be applied to each addressable audience." placement="top">
                <IconButton>
                    <Info />
                </IconButton>
            </CustomizedTooltipSmall>  (Addressable Display) </>} />
        <CardContent>
            <Grid2 container spacing={2} justify="center">
                <Grid2 size={{sm:12, md:6}}>
                    {/* Search Bar */}
                    <TextField
                        label="Search"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleSearch}
                    />

                    {/* Nested Accordions */}
                    {filteredData.map((category) => (
                        <Accordion
                            key={category.category}
                            expanded={expandedCategories[category.category] || false}
                            onChange={() => handleCategoryToggle(category.category)}
                            slotProps={{ transition: { unmountOnExit: true } }}
                            elevation={0}
                            sx={{
                                '&:before': {
                                    display: 'none',
                                }
                            }}
                            disableGutters
                        >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{category.category}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {category.subcategories.map((subcategory) => {
                            const filteredOptions = subcategory.options.filter((option) =>
                                option.toLowerCase().includes(searchTerm)
                            );

                            if (filteredOptions.length === 0) return null;

                            return (
                                <Accordion
                                    key={subcategory.subcategory}
                                    expanded={expandedSubcategories[subcategory.subcategory] || false}
                                    onChange={() => handleSubcategoryToggle(subcategory.subcategory)}
                                    slotProps={{ transition: { unmountOnExit: true } }}
                                    elevation={0}
                                    sx={{
                                        '&:before': {
                                            display: 'none',
                                        }
                                    }}
                                    disableGutters
                                >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>{subcategory.subcategory}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        {filteredOptions.map((option) => (
                                        <FormControlLabel
                                            key={option}
                                            control={
                                            <Checkbox
                                                onChange={() =>
                                                handleCheckboxChange(category.category, subcategory.subcategory, option)
                                                }
                                                checked={selectedData.some(
                                                (selected) =>
                                                    selected.option === option &&
                                                    selected.subcategory === subcategory.subcategory
                                                )}
                                            />
                                            }
                                            label={option}
                                        />
                                        ))}
                                    </FormGroup>
                                </AccordionDetails>
                                </Accordion>
                            );
                            })}
                        </AccordionDetails>
                        </Accordion>
                    ))}
                </Grid2>
                <Grid2 size={{sm:12, md:6}}>
                    {/* Selected Data as Chips */}
                    <div style={{ marginTop: '20px' }}>
                    <Typography variant="h6">Selected Data:</Typography>
                    {renderSelectedData()}
                    </div>
                </Grid2>
            </Grid2>
        </CardContent>
    </Card>
  );
}

export default memo(SectionAddressableSegments);
