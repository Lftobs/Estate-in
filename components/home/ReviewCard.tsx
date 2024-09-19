import Image from "next/image";

const ReviewCard = () => {
	return (
		<div className='w-auto max-w-[28rem] max-lg:w-[19.8rem] p-4 px-5 ring-1 overflow-x-hidden ring-border-black rounded-xl hover:shadow-slate-700 hover:shadow'>
			<div className="flex gap-3 my-5">
				<div className="relative w-10 h-10"><Image fill src='/images/star.svg' className='w-full h-full rounded' alt='review star'/></div>
				<div className="relative w-10 h-10"><Image fill src='/images/star.svg' className='w-full h-full rounded' alt='review star'/></div>
				<div className="relative w-10 h-10"><Image fill src='/images/star.svg' className='w-full h-full rounded' alt='review star'/></div>
				<div className="relative w-10 h-10"><Image fill src='/images/star.svg' className='w-full h-full rounded' alt='review star'/></div>
				<div className="relative w-10 h-10"><Image fill src='/images/star.svg' className='w-full h-full rounded' alt='review star'/></div>
			</div>
			<div className="mb-5">
				<h3 className="text-2xl font-semibold mb-3">Exceptional Service!</h3>
				<p>Our experience with Estatein was outstanding. Their team&lsquo;s dedication and professionalism made finding our dream home a breeze. Highly recommended!</p>
			</div>
			<div className="flex gap-5 mb-5">
				<Image src='/images/p-pic.jpg' width={50} height={50} className='rounded-full' alt='profile'/>
				<div>
					<h4 className='text-base font-semibold'>John Doe</h4>
					<p className='text-sm opacity-70'>USA, California</p>
				</div>
			</div>
		</div>
	);
}

export default ReviewCard;