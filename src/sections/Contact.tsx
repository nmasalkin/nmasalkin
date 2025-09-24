import React from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import {profile} from '../data/profile'

const Contact: React.FC = () => (
    <Section id="contact" title="Контакты" subtitle="Свяжитесь любым удобным способом">
        <div className="grid contacts">
            <Card>
                <strong>Электронная почта</strong>
                <p style={{marginTop: 8}}>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
            </Card>
            <Card>
                <strong>Телефон</strong>
                <p style={{marginTop: 8}}>
                    <a href={`tel:${profile.phone.replace(/\s|$begin:math:text$|$end:math:text$|-/g, '')}`}>{profile.phone}</a>
                </p>
            </Card>
            <Card>
                <strong>Telegram</strong>
                <p style={{marginTop: 8}}>
                    <a href={profile.telegram} target="_blank" rel="noreferrer">
                        {profile.telegram}
                    </a>
                </p>
            </Card>
            <Card>
                <strong>GitHub</strong>
                <p style={{marginTop: 8}}>
                    <a href={profile.github} target="_blank" rel="noreferrer">
                        {profile.github}
                    </a>
                </p>
            </Card>
        </div>
    </Section>
)

export default Contact