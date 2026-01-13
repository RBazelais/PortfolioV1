export const projects = [
	{
		slug: "adaptive-inventory",
		title: "Adaptive Inventory",
		subtitle: "Native UE5 inventory system with MVVM architecture",
		description: "A production-ready inventory system built in Unreal Engine 5 using C++ and UMG. Implements clean MVVM architecture, event-driven updates, and smart item stacking with widget pooling for optimal performance.",
		image: "/images/projects/adaptive-inventory.png",
		github: "https://github.com/RBazelais/AdaptiveInventory",
		liveUrl: null,
		featured: true,
		
		// Extended details for project page
		problem: "Most inventory tutorials teach tightly-coupled approaches that don't scale. I wanted to build a system following Epic's recommended patterns that could handle real game scenarios - thousands of items, real-time updates, and smooth UI performance.",
		
		solution: "Built a complete MVVM architecture separating data (UInventoryManagerSubsystem), logic (ViewModel), and presentation (UMG widgets). Used delegates for event-driven updates so the UI only refreshes when data actually changes.",
		
		features: [
			"Event-driven architecture with delegates for efficient UI updates",
			"Smart auto-stacking with overflow handling",
			"Widget pooling for performance optimization",
			"Data-driven item definitions using Data Assets",
			"Centralized styling system for consistent UI theming",
			"Blueprint-exposed API for designer flexibility"
		],
		
		challenges: [
			{
				title: "Auto-stacking overflow bug",
				description: "Items were disappearing when stacks overflowed. Traced it to the stacking logic not properly creating new stacks for remainder items.",
				solution: "Rewrote the AddItem function to recursively handle overflow, creating new stacks as needed and returning any items that couldn't fit."
			},
			{
				title: "Widget pooling complexity",
				description: "Creating/destroying widgets every frame was causing hitches. Needed a pooling system but had to manage widget state carefully.",
				solution: "Implemented an object pool that resets widget state on reuse. Widgets are hidden rather than destroyed, then reconfigured when needed."
			}
		],
		
		learnings: [
			"Deep understanding of UE5's UMG widget lifecycle",
			"MVVM pattern transfers from React/web to game engines - same architecture, different automation level",
			"C++ delegate system for decoupled communication",
			"Subsystems handle their own lifecycle, eliminating manual setup boilerplate",
			"Forward declarations sufficient for pointer types - only include headers when calling methods",
			"Event-driven UI scales to complex UIs without performance hits"
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