import KubeSlice from '/assets/KubeSlice.svg';
import KubeSliceManager from '/assets/KubeSliceManager.svg';
import SamartScaler from '/assets/SmartScaler.svg';
import STD from '/assets/STD.svg';

const cards = [
	{
		title: 'Kubeslice',
		image: {
			url: KubeSlice,
			alt: 'Kubeslice'
		},
		description: 'This section provides a high-level introduction and understanding of Kubeslice,',
		link: 'https://docs.kubeslice.io',
		points: [
			{ point: 'What is kubeslice', link: 'https://docs.kubeslice.io' },
			{ point: 'High level architecture', link: 'https://docs.kubeslice.io' },
			{ point: 'Kubeslice components', link: 'https://docs.kubeslice.io' },
			{ point: 'Key features', link: 'https://docs.kubeslice.io' }
		],
		variant: 'orange'
	},
	{
		title: 'KubeSlice Manager',
		image: {
			url: KubeSliceManager,
			alt: 'Kubeslice Manager'
		},
		description: 'This section provides a high-level introduction and understanding of Kubeslice,',
		link: 'https://docs.kubeslice.io',
		points: [
			{ point: 'What is kubeslice', link: 'https://docs.kubeslice.io' },
			{ point: 'High level architecture', link: 'https://docs.kubeslice.io' },
			{ point: 'Kubeslice components', link: 'https://docs.kubeslice.io' },
			{ point: 'Key features', link: 'https://docs.kubeslice.io' }
		],
		variant: 'orange'
	},
	{
		title: 'Smart Scaler',
		image: {
			url: SamartScaler,
			alt: 'Smart Scaler'
		},
		description: 'This section provides a high-level introduction and understanding of Kubeslice,',
		link: 'https://docs.kubeslice.io',
		points: [
			{ point: 'What is kubeslice', link: 'https://docs.kubeslice.io' },
			{ point: 'High level architecture', link: 'https://docs.kubeslice.io' },
			{ point: 'Kubeslice components', link: 'https://docs.kubeslice.io' },
			{ point: 'Key features', link: 'https://docs.kubeslice.io' }
		],
		variant: 'green'
	},
	{
		title: 'Smart Traffic Director',
		image: {
			url: STD,
			alt: 'Smart Traffic Director'
		},
		description: 'This section provides a high-level introduction and understanding of Kubeslice,',
		link: 'https://docs.kubeslice.io',
		points: [
			{ point: 'What is kubeslice', link: 'https://docs.kubeslice.io' },
			{ point: 'High level architecture', link: 'https://docs.kubeslice.io' },
			{ point: 'Kubeslice components', link: 'https://docs.kubeslice.io' },
			{ point: 'Key features', link: 'https://docs.kubeslice.io' }
		],
		variant: 'green'
	}
];

const points = [
	{ point: 'What is kubeslice', link: 'https://docs.kubeslice.io' },
	{ point: 'High level architecture', link: 'https://docs.kubeslice.io' },
	{ point: 'Kubeslice components', link: 'https://docs.kubeslice.io' },
	{ point: 'Key features', link: 'https://docs.kubeslice.io' }
];

const footerData = [
	{
		title: 'Products',
		items: [
			{
				title: 'KubeSlice',
				link: 'https://avesha.io/products/product-slice'
			},
			{
				title: 'KubeSlice Manager (UI)',
				link: 'https://avesha.io/products/kubeslice-manager'
			},
			{
				title: 'Smart Scaler',
				link: 'https://avesha.io/products/smart-scaler'
			},
			{
				title: 'Smart Traffic',
				link: 'https://avesha.io/products/smart-global-load-balancer'
			}
		]
	},
	{
		title: 'Solutions',
		items: [
			{
				title: 'Orchestrate VMs With K8s',
				link: 'https://avesha.io/use-case/vmkubed'
			},
			{
				title: 'Multi Cloud',
				link: 'https://avesha.io/use-case/use-case-multi-cloud'
			},
			{
				title: 'Hybrid Cloud',
				link: 'https://avesha.io/use-case/use-case-hybrid-cloud'
			},
			{
				title: 'FinOps: Manage Cloud Costs',
				link: 'https://avesha.io/use-case/use-case-fin-ops'
			},
			{
				title: 'Edge To Cloud in Real-Time',
				link: 'https://avesha.io/use-case/use-case-low-latency/'
			},
			{
				title: ' Achieve 100% Operational Availability',
				link: 'https://avesha.io/use-case/use-case-resiliency'
			}
		]
	},
	{
		title: 'Resources',
		items: [
			{
				title: 'Documentation',
				link: 'https://docs.avesha.io/documentation/enterprise'
			},
			{
				title: 'Whitepapers',
				link: 'https://avesha.io/resources/whitepapers'
			},
			{
				title: 'Videos',
				link: 'https://avesha.io/resources/videos'
			},
			{
				title: 'News',
				link: 'https://avesha.io/resources/news'
			},
			{
				title: 'Blog',
				link: 'https://avesha.io/resources/blog'
			},
			{
				title: 'Kubeslice Registration',
				link: 'https://avesha.io/kubeslice-registration'
			}
		]
	},
	{
		title: 'Community',
		items: [
			{
				title: 'Support',
				link: 'https://avesha.io/support'
			},
			{
				title: 'Events And Webinars',
				link: 'https://avesha.io/events'
			}
		]
	},
	{
		title: 'Company',
		items: [
			{
				title: 'About',
				link: 'https://avesha.io/about-us'
			},
			{
				title: 'Careers',
				link: 'https://avesha.io/careers'
			}
		]
	}
];

export { cards, points, footerData };
