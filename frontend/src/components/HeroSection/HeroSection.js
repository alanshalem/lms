import React from 'react';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
} from './HeroSection.elements';
import { useTranslation } from 'react-i18next';

const HeroSection = ({ Video, Title, Paragraph }) => {
	const [t, i18n] = useTranslation('global');
	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>{Title}</HeroH1>
				<HeroP>{Paragraph}</HeroP>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
