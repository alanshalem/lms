import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Video from '../assets/videos/hero_video.mp4';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<HeroSection
			Video={Video}
			Title={t('hero.title')}
			Paragraph={t('hero.paragraph')}
		/>
	);
};

export default HomePage;
