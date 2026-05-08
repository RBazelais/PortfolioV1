export const projects = [
	{
		slug: "standup-tracker",
		title: "StandUp Tracker",
		subtitle: "Reduce cognitive load. Your commits already know what you did.",
		description: "A full-stack developer tool that solves a specific friction: reconstructing yesterday's work across GitHub, Jira, and Slack from memory every morning. Groups commits by day and branch, links tasks automatically, and formats updates for every tool that needs it.",
		image: "/images/projects/standup-tracker.png",
		github: "https://github.com/RBazelais/standup-tracker",
		liveUrl: "https://standup-tracker-indol.vercel.app/",
		featured: true,
		status: "shipped",
		
		problem: "Engineers context-switch constantly: a bug for one team, a feature branch, a pairing session. Then 9am comes and you have to reconstruct your yesterday from memory while someone is already talking, then manually update GitHub, Jira, Slack, and smart goals. That cognitive load adds up.",
		
		solution: "Standup Tracker reduces that tax. Your commits already know what you did, grouped by day and branch, with your tasks already linked. What you complete gets formatted for every tool that needs it, so the update takes seconds instead of minutes. Tasks don't go stale because the work you're already doing becomes the communication.",
		
		features: [
			"Dual OAuth (GitHub + Jira) with token refresh and secure storage",
			"Optimistic UI with race-safe rollback using TanStack Query",
			"WCAG-compliant keyboard navigation (skip links, focus management on route transitions)",
			"Commit grouping by day and branch with smart selection",
			"Automatic task linking from commit messages",
			"Export formats for Slack, Markdown, Jira, and plain text",
			"PostgreSQL with Drizzle ORM for type-safe queries",
			"Playwright E2E suite against real Vercel preview deployments"
		],
		
		challenges: [
			{
				title: "Optimistic UI with race-safe rollback",
				description: "When a user creates a standup, the UI updates immediately. If the request fails, it rolls back. The subtlety is that a naive rollback restores the current cache state, which may have changed if another request landed in the meantime.",
				solution: "Snapshot the cache before the mutation and cancel any in-flight background refetches. The `cancelQueries` call makes it race safe: without it, a background refetch could overwrite the snapshot before the optimistic update lands."
			},
			{
				title: "OAuth cookie bridge across serverless functions",
				description: "Jira OAuth requires two serverless functions that share no memory. The redirect handler knows the user's ID and generates a CSRF state. The callback handler needs both, but has no way to get them.",
				solution: "A short-lived HttpOnly cookie. The redirect encodes state + userId into the cookie. The callback reads it, validates the CSRF state, and clears the cookie. SameSite=Lax (not Strict) is required for the OAuth redirect to work."
			},
			{
				title: "The sr-only ghost that broke 13 tests",
				description: "Adding a screen reader live region to toasts caused 13 Playwright tests to fail. The live region was working perfectly. The tests were wrong.",
				solution: "Scoped toast assertions to Sonner's `[data-title]` attribute, which exists only on the visible toast element. The sr-only div became invisible to the test, and the accessibility feature stayed."
			}
		],
		
		learnings: [
			"Cognitive load is a tax. Reducing it for developers should be a primary design goal.",
			"OAuth across serverless functions requires thinking about stateless bridges, not just copying patterns.",
			"Accessibility is not a checklist. A working feature can break your tests, forcing you to write better, more resilient assertions.",
			"The right place to handle null is at the boundary where data enters the component tree, not inside every leaf that uses it.",
			"Types should describe reality, not paper over it. `?? undefined` in adapter code is a code smell."
		],
		
		skills: [
			"React", "TypeScript", "Radix UI", "Tailwind CSS", "Zustand", "React Query", "PostgreSQL", "Drizzle ORM", "Playwright", "Vercel", "GitHub OAuth", "Jira OAuth"
		]
	},
	{
		slug: "adaptive-inventory",
		title: "Adaptive Inventory",
		subtitle: "Native UE5 inventory system with MVVM architecture",
		description: "A learning project exploring performance-optimized UI systems in Unreal Engine 5, built with C++ and Blueprints. Focus on clean architecture, event-driven updates, and Epic's recommended UMG patterns.",
		image: "/images/projects/adaptive-inventory.png",
		github: "https://github.com/RBazelais/AdaptiveInventory",
		liveUrl: null,
		featured: false,
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
		
		skills: ["Unreal Engine 5", "C++", "Blueprints", "Slate", "UMG"]
	},
	// {
	// 	slug: "logic-puzzle",
	// 	title: "Logic Puzzle App",
	// 	subtitle: "Collaborative full-stack puzzle game",
	// 	description: "A web-based logic puzzle game where players solve grid-based deduction puzzles. Built as a team project where I led frontend development, implementing the interactive puzzle component, validation system, and state machine.",
	// 	image: "/images/projects/logic-puzzle.png",
	// 	github: "https://github.com/Web103QPRBKA/CPWeb103FinalProject2025",
	// 	liveUrl: null,
	// 	featured: false,
		
	// 	problem: "Our team wanted to create an engaging puzzle game that could generate and validate logic puzzles dynamically, with a clean UI that made the deduction process intuitive.",
		
	// 	solution: "I architected the frontend using React with a state machine to manage puzzle states (playing, checking, solved, failed). The puzzle grid component handles complex user interactions while the validation system checks solutions against the puzzle rules.",
		
	// 	features: [
	// 		"Interactive grid with click-to-toggle cell states",
	// 		"Real-time validation feedback",
	// 		"State machine for game flow management",
	// 		"Responsive design for mobile play",
	// 		"Leaderboard integration with backend API"
	// 	],
		
	// 	challenges: [
	// 		{
	// 			title: "Complex grid interactions",
	// 			description: "Users needed to mark cells as 'yes', 'no', or 'maybe' with visual feedback. Managing this state across a dynamic grid was tricky.",
	// 			solution: "Created a custom hook useGridState that manages a 2D array of cell states with immutable updates, plus helper functions for row/column operations."
	// 		},
	// 		{
	// 			title: "Puzzle data entry bottleneck",
	// 			description: "We needed a lot of puzzles in the database to make the game interesting, but manually entering puzzle data was slow and error-prone.",
	// 			solution: "Built an Add Puzzle component with a user-friendly form that validates puzzle structure and makes it easy to add new puzzles to the database quickly."
	// 		},
	// 		{
	// 			title: "Team coordination",
	// 			description: "Three developers working on interconnected features (frontend, backend API, database) needed clear interfaces.",
	// 			solution: "Used Miro for planning and mapping out feature dependencies. Defined API contracts early and kept documentation updated as we iterated."
	// 		}
	// 	],
		
	// 	learnings: [
	// 		"State machine patterns for complex UI flows",
	// 		"Team collaboration and API contract design",
	// 		"Grid-based UI component architecture",
	// 		"Integration testing for frontend/backend communication"
	// 	],
		
	// 	skills: ["React", "JavaScript", "Node", "PostgreSQL",]
	// },
	{
		slug: "hype-check",
		title: "The Hype Check",
		subtitle: "Real-time movie trailer discussion platform",
		description: "A full-stack social platform where users discuss and rate movie trailers. Features real-time posts, comments, upvoting, and secure authentication powered by Supabase.",
		image: "/images/projects/hype-check.gif",
		github: "https://github.com/RBazelais/The-Hype-Check",
		liveUrl: null,
		featured: false,
		
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
		
		skills: ["React", "JavaScript", "PostgreSQL", "Tailwind CSS", "MovieDB"]
	},
	// {
	// 	slug: "lucky-slots",
	// 	title: "Lucky Slots",
	// 	subtitle: "Animated slot machine with probability engine",
	// 	description: "A fully interactive slot machine game featuring smooth reel animations, auto-play functionality, and comprehensive statistics tracking. Built to explore game feel and animation timing.",
	// 	image: "/images/projects/lucky-slots.gif",
	// 	github: "https://github.com/RBazelais/LuckySlotMachine",
	// 	liveUrl: null,
	// 	featured: false,
		
	// 	problem: "I wanted to study what makes casino games feel satisfying - the anticipation, the near-misses, the celebration of wins. This was an exercise in game feel and juice.",
		
	// 	solution: "Built a slot machine from scratch with careful attention to timing and feedback. Each reel spins independently with easing functions, symbols have weighted probabilities, and wins trigger celebratory animations.",
		
	// 	features: [
	// 		"Smooth CSS animations with custom easing",
	// 		"Configurable symbol probabilities",
	// 		"Auto-play mode with adjustable speed",
	// 		"Statistics tracking (spins, wins, biggest win)",
	// 		"Responsive design",
	// 		"Zustand for state management"
	// 	],
		
	// 	challenges: [
	// 		{
	// 			title: "Reel animation timing",
	// 			description: "Making reels stop sequentially with satisfying timing was harder than expected. Too fast felt random, too slow was boring.",
	// 			solution: "Experimented with different delays and easing curves. Settled on 200ms between each reel stop with an ease-out curve that creates anticipation."
	// 		},
	// 		{
	// 			title: "Probability system",
	// 			description: "Needed a fair but tunable system for determining outcomes.",
	// 			solution: "Created a weighted random selection system. Each symbol has a weight, and the total determines probability. Easy to tweak for different 'looseness' levels."
	// 		}
	// 	],
		
	// 	learnings: [
	// 		"Animation timing and game feel",
	// 		"Probability and weighted random systems",
	// 		"Zustand for lightweight state management",
	// 		"The psychology of satisfying feedback"
	// 	],
		
	// 	skills: ["React", "TypeScript", "Zustand", "Tailwind CSS"]
	// }
];

// Helper to get a project by slug
export function getProjectBySlug(slug) {
	return projects.find(p => p.slug === slug);
}

// Helper to get all slugs (for static generation)
export function getAllProjectSlugs() {
	return projects.map(p => p.slug);
}