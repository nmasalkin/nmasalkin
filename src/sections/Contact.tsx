import React from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import { profile } from '../data/profile'

const Contact: React.FC = () => (
    <Section id="contact" title="Контакты" subtitle="Свяжитесь любым удобным способом">
        <div className="grid contacts">

            <a href={`mailto:${profile.email}`} style={{ textDecoration: 'none', display: 'block' }}>
                <Card>
                    <strong>Электронная почта</strong>
                    <p style={{ marginTop: 8 }}>{profile.email}</p>
                </Card>
            </a>

            <a href={`tel:${profile.phone.replace(/\s|$begin:math:text$|$end:math:text$|-/g, '')}`} style={{ textDecoration: 'none', display: 'block' }}>
                <Card>
                    <strong>Телефон</strong>
                    <p style={{ marginTop: 8 }}>{profile.phone}</p>
                </Card>
            </a>

            <a href={profile.telegram} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                <Card>
                    <strong>Telegram</strong>
                    <p style={{ marginTop: 8 }}>{profile.telegram}</p>
                </Card>
            </a>

            <a href={profile.github} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                <Card>
                    <strong>GitHub</strong>
                    <p style={{ marginTop: 8 }}>{profile.github}</p>
                </Card>
            </a>

        </div>
    </Section>
)

export default Contact