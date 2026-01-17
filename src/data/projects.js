export const projects = [
	{
		slug: "standup-tracker",
		title: "StandUp Tracker",
		subtitle: "Auto-create standup notes from Git commits",
		description: "Standup Tracker helps developers track daily progress by automatically pulling GitHub commits to create standup notes in seconds. Perfect for async teams and individuals who want to stay organized without disrupting workflow.",
		image: "/images/projects/standup-tracker.png",
		github: "https://github.com/RBazelais/standup-tracker",
		liveUrl: null,
		featured: true,
		status: "in-progress",
		
		problem: "Daily standups can disrupt focus and are hard across timezones; teams needed an async, low-friction way to create updates.",
		
		solution: "Auto-populate standup notes from Git commits, with GitHub OAuth for secure access and a light, fast UI built with React + TypeScript.",
		
		features: [
			"Auto-populate from Git commits",
			"GitHub OAuth with secure token handling",
			"Dark mode by default",
			"Link updates to SMART goals (planned)",
			"Vercel serverless functions for backend"
		],
		
		challenges: [
			{
				title: "Commit parsing and noise",
				description: "Commits vary in quality; need to extract meaningful lines for standup notes without noise.",
				solution: "Implement heuristics to select commit messages and optionally allow manual edits before saving."
			}
		],
		
		learnings: [
			"Designing UX for async workflows",
			"Integrating OAuth securely with serverless functions",
			"Balancing automation with manual control"
		],
		
		skills: ["React", "TypeScript", "Vite", "Zustand", "Tailwind CSS", "Framer Motion", "Octokit", "Vercel"]
	},
	{
		slug: "adaptive-inventory",
		title: "Adaptive Inventory",
		subtitle: "Native UE5 inventory system with MVVM architecture",
		description: "A learning project exploring performance-optimized UI systems in Unreal Engine 5, built with C++ and Blueprints. Focus on clean architecture, event-driven updates, and Epic's recommended UMG patterns.",
		image: "/images/projects/adaptive-inventory.png",
		github: "https://github.com/RBazelais/AdaptiveInventory",
		liveUrl: null,
		featured: true,
		status: "in-progress",
		
		problem: "Most inventory tutorials teach tightly-coupled approaches that don't scale. Coming from web-based game UI (Coherent Gameface), I wanted to understand how native UE5 UMG systems work and learn Epic's recommended patterns for production-quality game UI.",
		
		solution: "Building a three-layer MVVM architecture: Data (UInventoryItemData), Business Logic (UInventoryManagerSubsystem), and Presentation (UMG widgets). Using delegates for event-driven updates so UI only refreshes when data actually changes - no tick-based polling.",
		
		features: [
			"Event-driven architecture with delegates (no per-frame checks)",
			"Smart auto-stacking with overflow handling",
			"GameInstanceSubsystem for persistence across level loads",
			"Blueprint-exposed API via UFUNCTION/UPROPERTY",
			"Widget base class with automatic event binding/cleanup",
			"Filtering by category, rarity, or partial name match"
		],
		
		challenges: [
			{
				title: "Auto-stacking overflow",
				description: "Adding 80 items to a stack of 50 (max 99) needed to fill the first stack and create a new one with remainder.",
				solution: "Items distribute across all partial stacks before creating new slots. System splits automatically when stacks fill up."
			},
			{
				title: "Items not stacking",
				description: "Created two 'Health Potions' but they wouldn't combine into one stack.",
				solution: "Item names are case-sensitive in C++! Also need to match category. String comparison requires exact matches."
			},
			{
				title: "Subsystem not showing in Blueprint",
				description: "Couldn't find the inventory subsystem when searching in Blueprint graphs.",
				solution: "Blueprint reflection requires editor restart after C++ changes. Compile C++ then restart editor."
			}
		],
		
		learnings: [
			"MVVM pattern transfers from React/web to game engines - same architecture, different automation level",
			"Subsystems handle their own lifecycle, eliminating manual setup boilerplate",
			"Forward declarations sufficient for pointer types - only include headers when calling methods",
			"Event-driven UI is how Fortnite works - scales to complex UIs without performance hits"
		],
		
		skills: ["Unreal Engine 5", "C++", "Blueprints", "UMG", "MVVM"]
	},
	{
		slug: "logic-puzzle",
		title: "Logic Puzzle App",
		subtitle: "Collaborative full-stack puzzle game",
		description: "A web-based logic puzzle game where players solve grid-based deduction puzzles. Built as a team project where I led frontend development, implementing the interactive puzzle component, validation system, and state machine.",
		image: "/images/projects/logic-puzzle.png",
		github: "https://github.com/Web103QPRBKA/CPWeb103FinalProject2025",
		liveUrl: null,
		featured: true,
		
		problem: "Our team wanted to create an engaging puzzle game that could generate and validate logic puzzles dynamically, with a clean UI that made the deduction process intuitive.",
		
		solution: "I architected the frontend using React with a state machine to manage puzzle states (playing, checking, solved, failed). The puzzle grid component handles complex user interactions while the validation system checks solutions against the puzzle rules.",
		
		features: [
			"Interactive grid with click-to-toggle cell states",
			"Real-time validation feedback",
			"State machine for game flow management",
			"Responsive design for mobile play",
			"Leaderboard integration with backend API"
		],
		
		challenges: [
			{
				title: "Complex grid interactions",
				description: "Users needed to mark cells as 'yes', 'no', or 'maybe' with visual feedback. Managing this state across a dynamic grid was tricky.",
				solution: "Created a custom hook useGridState that manages a 2D array of cell states with immutable updates, plus helper functions for row/column operations."
			},
			{
				title: "Puzzle data entry bottleneck",
				description: "We needed a lot of puzzles in the database to make the game interesting, but manually entering puzzle data was slow and error-prone.",
				solution: "Built an Add Puzzle component with a user-friendly form that validates puzzle structure and makes it easy to add new puzzles to the database quickly."
			},
			{
				title: "Team coordination",
				description: "Three developers working on interconnected features (frontend, backend API, database) needed clear interfaces.",
				solution: "Used Miro for planning and mapping out feature dependencies. Defined API contracts early and kept documentation updated as we iterated."
			}
		],
		
		learnings: [
			"State machine patterns for complex UI flows",
			"Team collaboration and API contract design",
			"Grid-based UI component architecture",
			"Integration testing for frontend/backend communication"
		],
		
		skills: ["React", "JavaScript", "Node.js", "PostgreSQL", "HTML & CSS"]
	},
	{
		slug: "hype-check",
		title: "The Hype Check",
		subtitle: "Real-time movie trailer discussion platform",
		description: "A full-stack social platform where users discuss and rate movie trailers. Features real-time posts, comments, upvoting, and secure authentication powered by Supabase.",
		image: "/images/projects/hype-check.gif",
		github: "https://github.com/RBazelais/The-Hype-Check",
		liveUrl: null,
		featured: true,
		
		problem: "Movie trailer discussions are scattered across YouTube comments, Reddit, and Twitter. I wanted a dedicated space where people could discuss trailers, track their hype levels, and see community sentiment.",
		
		solution: "Built a Reddit-style platform specifically for trailers. Users can post trailers, comment, and upvote. Supabase handles auth and real-time subscriptions so discussions update live without refreshing.",
		
		features: [
			"User authentication with Supabase Auth",
			"Real-time posts and comments",
			"Upvote/downvote system",
			"Trailer embedding from YouTube",
			"User profiles with post history",
			"Responsive mobile-first design"
		],
		
		challenges: [
			{
				title: "Real-time updates",
				description: "Wanted comments and votes to appear instantly for all users viewing the same trailer.",
				solution: "Used Supabase real-time subscriptions to listen for database changes. When a new comment is inserted, all connected clients receive the update."
			},
			{
				title: "Optimistic UI updates",
				description: "Waiting for server confirmation made voting feel sluggish.",
				solution: "Implemented optimistic updates - UI changes immediately on click, then reconciles with server response. If the request fails, the UI reverts."
			}
		],
		
		learnings: [
			"Real-time database subscriptions",
			"Optimistic UI patterns",
			"Supabase Auth integration",
			"Building engaging social features"
		],
		
		skills: ["React", "JavaScript", "Tailwind CSS", "PostgreSQL", "Supabase"]
	},
	{
		slug: "lucky-slots",
		title: "Lucky Slots",
		subtitle: "Animated slot machine with probability engine",
		description: "A fully interactive slot machine game featuring smooth reel animations, auto-play functionality, and comprehensive statistics tracking. Built to explore game feel and animation timing.",
		image: "/images/projects/lucky-slots.gif",
		github: "https://github.com/RBazelais/LuckySlotMachine",
		liveUrl: null,
		featured: true,
		
		problem: "I wanted to study what makes casino games feel satisfying - the anticipation, the near-misses, the celebration of wins. This was an exercise in game feel and juice.",
		
		solution: "Built a slot machine from scratch with careful attention to timing and feedback. Each reel spins independently with easing functions, symbols have weighted probabilities, and wins trigger celebratory animations.",
		
		features: [
			"Smooth CSS animations with custom easing",
			"Configurable symbol probabilities",
			"Auto-play mode with adjustable speed",
			"Statistics tracking (spins, wins, biggest win)",
			"Responsive design",
			"Zustand for state management"
		],
		
		challenges: [
			{
				title: "Reel animation timing",
				description: "Making reels stop sequentially with satisfying timing was harder than expected. Too fast felt random, too slow was boring.",
				solution: "Experimented with different delays and easing curves. Settled on 200ms between each reel stop with an ease-out curve that creates anticipation."
			},
			{
				title: "Probability system",
				description: "Needed a fair but tunable system for determining outcomes.",
				solution: "Created a weighted random selection system. Each symbol has a weight, and the total determines probability. Easy to tweak for different 'looseness' levels."
			}
		],
		
		learnings: [
			"Animation timing and game feel",
			"Probability and weighted random systems",
			"Zustand for lightweight state management",
			"The psychology of satisfying feedback"
		],
		
		skills: ["React", "TypeScript", "Tailwind CSS", "Zustand"]
	}
];

// Helper to get a project by slug
export function getProjectBySlug(slug) {
	return projects.find(p => p.slug === slug);
}

// Helper to get all slugs (for static generation)
export function getAllProjectSlugs() {
	return projects.map(p => p.slug);
}