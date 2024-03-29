import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

function Stats() {
  const { t } = useTranslation();
	const [ isVisible, setIsVisible ] = useState(false);
	const [ countStarted, setCountStarted ] = useState(false);
	const [ countEnd ] = useState([ 7, 25000, 32 ]);
	const [ counting, setCounting ] = useState([ 0, 0, 0 ]);

	const { ref, inView } = useInView({
		triggerOnce: true
	});

	useEffect(
		() => {
			const startCounting = () => {
				if (!countStarted) {
					setCountStarted(true);
					const interval = setInterval(() => {
						let newCounting = [ ...counting ];
						let allFinished = true;
						for (let i = 0; i < countEnd.length; i++) {
							if (counting[i] < countEnd[i]) {
								newCounting[i] += 1;
								allFinished = false;
							}
						}
						setCounting(newCounting);

						if (allFinished) {
							clearInterval(interval);
						}
					}, 100);
				}
			};

			if (inView && !countStarted) {
				setIsVisible(true);
				startCounting();
			}
		},
		[ inView, countStarted, countEnd, counting ]
	);

	return (
		<section className="dark:bg-gray-900">
		  <div className="max-w-screen-xl px-4 py-8 bg-matcha mx-auto text-center lg:py-16 lg:px-6">
			<dl className="grid max-w-screen-md gap-8 mx-auto text-blue-50 sm:grid-cols-3 dark:text-blue-50">
			  {countEnd.map((endValue, index) => (
				<div className="flex flex-col items-center justify-center" key={index}>
				  <div ref={ref} className="mb-2 text-3xl md:text-xl font-extrabold">
					{isVisible ? (
					  <CountUp end={endValue} duration={5} start={0} separator="," useEasing={true} />
					) : (
					  '0'
					)}
				  </div>
				  <dd className="font-light text-blue-50 dark:text-blue-50">
					{index === 0 ? t('stats.followers') : index === 1 ? t('stats.revenue') : t('stats.sales')}
				  </dd>
				</div>
			  ))}
			</dl>
		  </div>
		</section>
	  );
	}
	
	export default Stats;