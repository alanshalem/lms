import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Video from '../assets/videos/404_video.mp4';
import { useTranslation } from 'react-i18next';
const NotFoundPage = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<HeroSection
			Video={Video}
			Title={t('not-found.title')}
			Paragraph={t('not-found.paragraph')}
		/>
	);
};

export default NotFoundPage;
