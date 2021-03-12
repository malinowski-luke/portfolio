import React from 'react'
import Title from '../../components/Title/Title'
import { Row, Col } from 'react-bootstrap'
import Contact from '../../components/Contact/Contact'
import Text from '../../components/Text/Text'
import Medal from '../../components/Medal/Medal'
import './Self.scss'

export default function Self() {
	return (
		<div className='Self mb-4 slide-fade'>
			<Title>Self</Title>
			<Row className='align-items-center'>
				<Col lg={5} className='mb-4 text-center'>
					<Medal frontImg='/assets/images/headshot.jpg' backImg='/assets/images/iceland.jpg' />
				</Col>
				<Col lg={7}>
					<Text>
						Audio Engineer turned Software Engineer, I found my passion for coding in an unconventional way. In college, I pursued the track of Audio
						Engineering - a musician at heart, I practiced producing and mixing audio for a variety of uses.
					</Text>
					<Text>
						Along the way, I found interest in software engineering that lead to the pivot of my career path. I started off with Javascript, Node.js,
						React, and Bootstrap.
					</Text>
					<Text>
						After the completion of many smaller web based applications, I moved onto a personal project called JeepThings - a culmination of my
						skills, JeepThings solved a problem that was close to home - a web app for car lovers and rebuilders to trade, sell, and buy auto parts -
						something that my family often did.
					</Text>
					<Text>
						I am currently in <span className='big font-italic'>New York</span> seeking my next endeavor...
					</Text>
				</Col>
			</Row>
			<Contact />
		</div>
	)
}
