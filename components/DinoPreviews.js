import Image from 'next/image';

function DinoPreviews() {

	
	const videoStyle = {
		objectFit: 'cover',
		width: '100%',
		height: '100%',
		border: 'none', // Remove the border
		border: 'none',
	  };

	return (
		<section className="grid grid-rows-2 bg-gradient-to-br from-purple-600 to-blue-500">
			<div className="relative flex overflow-x-hidden">
				<div className="flex">
					{' '}
					{[...Array(5)].map((x, i) => (
						<div
							className="w-[150px] sm:w-[calc(100vw/5)] pt-1 px-1 animate-marquee-right"
							key={i}>
							<video autoPlay loop muted className="rounded-md" style={videoStyle}>
				  <source src='./480.mp4' type="video/mp4" />
				  Your browser does not support the video tag.
				</video>
						</div>
					))}{' '}
				</div>{' '}
				<div className="absolute top-0 flex">
					{' '}
					{[...Array(5)].map((x, i) => (
						<div
							className="w-[150px] sm:w-[calc(100vw/5)] pt-1 px-1 animate-marquee2-right"
							key={i}>
							<video autoPlay loop muted className="rounded-md" style={videoStyle}>
				  <source src='./480.mp4' type="video/mp4" />
				  Your browser does not support the video tag.
				</video>
						</div>
					))}{' '}
				</div>{' '}
			</div>{' '}
			<div className="relative flex overflow-x-hidden">
				<div className="flex">
					{' '}
					{[...Array(5)].map((x, i) => (
						<div
							className="w-[150px] sm:w-[calc(100vw/5)] pt-1 px-1 animate-marquee"
							key={i}>
							<video autoPlay loop muted className="rounded-md" style={videoStyle}>
				  <source src='./480.mp4' type="video/mp4" />
				  Your browser does not support the video tag.
				</video>
						</div>
					))}{' '}
				</div>{' '}
				<div className="absolute top-0 flex">
					{' '}
					{[...Array(5)].map((x, i) => (
						<div
							className="w-[150px] sm:w-[calc(100vw/5)] pt-1 px-1 animate-marquee2"
							key={i}>
							<video autoPlay loop muted className="rounded-md" style={videoStyle}>
				  <source src='./480.mp4' type="video/mp4" />
				  Your browser does not support the video tag.
				</video>
						</div>
					))}{' '}
				</div>{' '}
			</div>{' '}
		</section>
	);
}

export default DinoPreviews;