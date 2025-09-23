import React from "react";
import Logo from '@/assets/NMlogo.svg?react';
import TGqr from '@/assets/TGqr.svg?react';
import GHqr from '@/assets/GHqr.svg?react';
import TGlogo from '@/assets/TGlogo.svg?react';
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {
    Mail,
    Phone,
    Github,
    Menu,
    Download,
    Send,
    MapPin,
    Moon,
    Sun,
} from "lucide-react";

const skills = [
    // Языки и платформы
    "Java",
    "Dart",
    "Flutter",

    // Фреймворки и библиотеки
    "Spring",
    "Spring Boot",
    "Spring Data",
    "Hibernate",
    "Servlets",
    "Tomcat",

    // Базы данных
    "PostgreSQL",
    "JDBC",

    // DevOps и инфраструктура
    "Docker",
    "RabbitMQ",
    "Maven",

    // Инструменты
    "Git",
    "Lombok",

    // Тестирование
    "JUnit",

    // Концепции
    "Алгоритмы",
    "ООП"
];

function useThemeToggle() {
    const [dark, setDark] = React.useState(false);
    React.useEffect(() => {
        const root = document.documentElement;
        if (dark) root.classList.add("dark");
        else root.classList.remove("dark");
    }, [dark]);
    return {dark, setDark};
}

function AnimatedGradientBg() {
    return (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <svg className="absolute inset-0 h-0 w-0" aria-hidden="true">
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur"/>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -12"
                                   result="goo"/>
                    <feBlend in="SourceGraphic" in2="goo"/>
                </filter>
            </svg>

            <div style={{filter: "url(#goo)"}} className="absolute inset-0">
                <motion.div
                    initial={{x: -200, y: -100, scale: 1}}
                    animate={{x: 100, y: 40, scale: 1.1}}
                    transition={{duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}
                    className="absolute left-[-10%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-400/35 via-sky-400/25 to-emerald-400/35 blur-2xl"
                />
                <motion.div
                    initial={{x: 120, y: 120, scale: 0.9}}
                    animate={{x: -60, y: 90, scale: 1.05}}
                    transition={{duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}
                    className="absolute right-[-8%] top-[10%] h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-rose-400/30 via-indigo-400/25 to-cyan-400/30 blur-2xl"
                />
                <motion.div
                    initial={{x: -60, y: 80, scale: 1}}
                    animate={{x: 80, y: -40, scale: 1.08}}
                    transition={{duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}
                    className="absolute bottom-[-12%] left-[10%] h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-amber-400/25 via-pink-400/25 to-violet-400/25 blur-2xl"
                />
            </div>

            <div
                className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url('data:image/svg+xml;utf8,<?xml version=\\'1.0\\'?><svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'140\\' height=\\'140\\' viewBox=\\'0 0 140 140\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\'/></svg>')",
                }}
            />
        </div>
    );
}

const Section = ({id, children, className = ""}: React.PropsWithChildren<{ id: string; className?: string }>) => (
    <section id={id} className={"relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 " + className}>
        {children}
    </section>
);

const Glass = ({children, className = ""}: React.PropsWithChildren<{ className?: string }>) => (
    <div
        className={
            "relative overflow-hidden rounded-3xl border p-6 backdrop-blur-2xl shadow-xl shadow-black/10 " +
            "bg-white/80 supports-[backdrop-filter]:bg-white/50 " +
            "border-slate-200/80 dark:bg-white/5 dark:border-white/10 " +
            (className ? " " + className : "")
        }
    >
        {children}
    </div>
);

export default function Portfolio() {
    const {dark, setDark} = useThemeToggle();

    return (
        <TooltipProvider>
            <div
                className="relative min-h-screen scroll-smooth bg-gradient-to-b from-white to-slate-100 dark:from-[#0b0d12] dark:to-[#0b0d12] text-slate-900 dark:text-slate-100">
                <AnimatedGradientBg/>

                {/* Header */}
                <header className="sticky top-3 z-40 mx-auto w-full max-w-6xl px-4">
                    <div
                        className="flex items-center justify-between rounded-2xl border p-2 backdrop-blur-xl
               bg-white/80 supports-[backdrop-filter]:bg-white/60 border-slate-200/80
               shadow-[0_1px_0_0_rgba(0,0,0,0.04)]
               dark:bg-white/5 dark:border-white/10 dark:shadow-none"
                    >
                        {/* Логотип слева */}
                        <a
                            href="#home"
                            className="flex items-center gap-2 rounded-xl px-3 py-2 transition
                 hover:bg-white/50 dark:hover:bg-white/10"
                        >
                            <Logo className="h-6 w-6 dark:invert"/>
                            <span className="font-semibold tracking-tight">NIKITA MASALKIN</span>
                        </a>

                        {/* Навигация + кнопки справа */}
                        <div className="flex items-center gap-2">
                            {/* Навигация */}
                            <nav className="hidden gap-2 sm:flex mr-2">
                                {[
                                    {id: "about", label: "Обо мне"},
                                    {id: "skills", label: "Навыки"},
                                    {id: "projects", label: "Проекты"},
                                    {id: "contact", label: "Контакты"},
                                ].map((l) => (
                                    <a
                                        key={l.id}
                                        href={`#${l.id}`}
                                        className="rounded-xl border px-3 py-2 text-sm font-medium tracking-tight transition border-transparent hover:border-slate-300 hover:bg-white/60 dark:hover:bg-white/10 dark:hover:border-white/20">
                                        {l.label}
                                    </a>
                                ))}
                            </nav>

                            {/* Переключатель темы */}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" onClick={() => setDark(!dark)}>
                                        {dark ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Переключить тему</TooltipContent>
                            </Tooltip>

                            {/* Бургер-меню на мобилке */}
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="sm:hidden">
                                        <Menu className="h-5 w-5"/>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="backdrop-blur-xl">
                                    <SheetHeader>
                                        <SheetTitle>Навигация</SheetTitle>
                                    </SheetHeader>
                                    <div className="mt-4 grid gap-1">
                                        {[
                                            {id: "about", label: "Обо мне"},
                                            {id: "skills", label: "Навыки"},
                                            {id: "projects", label: "Проекты"},
                                            {id: "contact", label: "Контакты"},
                                        ].map((l) => (
                                            <a
                                                key={l.id}
                                                href={`#${l.id}`}
                                                className="rounded-xl px-3 py-2 text-sm font-medium tracking-tight
                           transition hover:bg-white/50 dark:hover:bg-white/10"
                                            >
                                                {l.label}
                                            </a>
                                        ))}
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </header>

                {/* Hero */}
                <Section id="home" className="pt-16 sm:pt-24">
                    <Glass className="relative overflow-hidden">
                        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6}}>
                            <div
                                className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
                                        Масалкин Никита Сергеевич
                                    </h1>
                                    <p className="mt-4 max-w-2xl text-base/7 text-slate-700 dark:text-slate-300">
                                        Студент 4 курса ФКН ВГУ (Программная инженерия, выпуск 2026).
                                    </p>
                                    <div className="mt-6 flex flex-wrap items-center gap-3">
                                        <Button asChild size="lg" className="group">
                                            <a href="#contact"><Send
                                                className="mr-2 h-4 w-4 transition group-hover:translate-x-0.5"/>Связаться</a>
                                        </Button>
                                        <Button variant="secondary" asChild size="lg" className="group">
                                            <a href="/Масалкин Никита Сергеевич.pdf" download>
                                                <Download className="mr-2 h-4 w-4"/>Скачать резюме
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                {[
                                    {icon: <MapPin className="h-4 w-4"/>, label: "Город", value: "Воронеж"},
                                    {
                                        icon: <Mail className="h-4 w-4"/>,
                                        label: "Email",
                                        value: "nmasalkin96@yandex.ru",
                                        href: "mailto:nmasalkin96@yandex.ru"
                                    },
                                    {
                                        icon: <Phone className="h-4 w-4"/>,
                                        label: "Телефон",
                                        value: "+7 (919) 242-19-91",
                                        href: "tel:+79192421991"
                                    },
                                ].map((it) => (
                                    <Card key={it.label}
                                          className="border border-slate-200/80 bg-white/70 supports-[backdrop-filter]:bg-white/50 backdrop-blur-md dark:bg-white/5 dark:border-white/10">
                                        <CardContent className="flex items-center gap-3 p-4">
                                            <span>{it.icon}</span>
                                            <div className="text-sm">
                                                <div
                                                    className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">{it.label}</div>
                                                {it.href ? (
                                                    <a href={it.href}
                                                       className="font-medium hover:underline">{it.value}</a>
                                                ) : (
                                                    <div className="font-medium">{it.value}</div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </motion.div>
                    </Glass>
                </Section>

                {/* About */}
                <Section id="about" className="pt-14">
                    <div className="grid items-start gap-6 lg:grid-cols-3">
                        <Glass className="lg:col-span-2">
                            <h2 className="text-2xl font-bold tracking-tight">Обо мне</h2>
                            <p className="mt-3 text-slate-700 dark:text-slate-300">
                                Студент 4 курса ФКН ВГУ, направление программная инженерия, проживаю в городе Воронеж.
                                Стремлюсь усердно работать и постоянно развиваться в области ИТ.
                                <br/>
                                Весной 2024 года проходил стажировку в компании Digital Spirit.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <Badge>Частичная занятость</Badge>
                                <Badge variant="secondary">Гибкий график · Удалённо</Badge>
                            </div>
                        </Glass>
                        <Glass>
                            <h3 className="text-xl font-semibold">Образование</h3>
                            <Separator className="my-3"/>
                            <div className="space-y-2 text-sm">
                                <div className="font-medium">Воронежский государственный университет</div>
                                <div className="text-slate-600 dark:text-slate-400">ФКН · Программная инженерия</div>
                                <div className="text-slate-600 dark:text-slate-400">Неоконченное высшее, выпуск 2026
                                </div>
                            </div>
                        </Glass>
                    </div>
                </Section>

                {/* Skills */}
                <Section id="skills" className="pt-14">
                    <Glass className="p-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold tracking-tight">Навыки</h2>
                        </div>
                        <Separator className="my-4"/>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((s) => (
                                <div
                                    key={s}
                                    className="whitespace-nowrap rounded-2xl border px-3 py-2 text-sm font-medium
                     backdrop-blur-md bg-white/70 supports-[backdrop-filter]:bg-white/50
                     border-slate-200/80 dark:bg-white/5 dark:border-white/10
                     hover:-translate-y-0.5 transition"
                                >
                                    {s}
                                </div>
                            ))}
                        </div>
                    </Glass>
                </Section>

                {/* Contact */}
                <Section id="contact" className="pt-14 pb-14">
                    <Glass className="overflow-hidden">
                        <h2 className="text-2xl font-bold tracking-tight">Свяжитесь со мной</h2>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            Открыт к предложениям стажировок и junior-позиций. Предпочтительный способ связи — Email или
                            Telegram.
                        </p>

                        {/* 2:2:1:1 — на lg экранах / на мобилке всё складывается в столбик */}
                        <div className="mt-6 grid gap-4 lg:grid-cols-6">
                            {/* 1) Телефон + Email (занимают 2 колонки) */}
                            <div className="grid gap-3 col-span-6 lg:col-span-2">
                                <a
                                    href="tel:+79192421991"
                                    className="flex items-center gap-3 rounded-2xl border p-4 backdrop-blur-md transition
                     bg-white/80 supports-[backdrop-filter]:bg-white/50 hover:bg-white/90
                     border-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
                                >
                                    <Phone className="h-5 w-5"/>
                                    <div className="text-sm">
                                        <div className="font-semibold">Телефон</div>
                                        <div className="text-slate-600 dark:text-slate-400">+7 (919) 242-19-91</div>
                                    </div>
                                </a>

                                <a
                                    href="mailto:nmasalkin96@yandex.ru"
                                    className="flex items-center gap-3 rounded-2xl border p-4 backdrop-blur-md transition
                     bg-white/80 supports-[backdrop-filter]:bg-white/50 hover:bg-white/90
                     border-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
                                >
                                    <Mail className="h-5 w-5"/>
                                    <div className="text-sm">
                                        <div className="font-semibold">Email</div>
                                        <div className="text-slate-600 dark:text-slate-400">nmasalkin96@yandex.ru</div>
                                    </div>
                                </a>
                            </div>

                            {/* 2) Telegram + GitHub (занимают 2 колонки) */}
                            <div className="grid gap-3 col-span-6 lg:col-span-2">
                                <a
                                    href="https://t.me/el_nikitinho"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 rounded-2xl border p-4 backdrop-blur-md transition
                     bg-white/80 supports-[backdrop-filter]:bg-white/50 hover:bg-white/90
                     border-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
                                >
                                    <TGlogo className="h-5 w-5 dark:invert"/>
                                    <div className="text-sm">
                                        <div className="font-semibold">Telegram</div>
                                        <div className="text-slate-600 dark:text-slate-400">@el_nikitinho</div>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/nmasalkin"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 rounded-2xl border p-4 backdrop-blur-md transition
                     bg-white/80 supports-[backdrop-filter]:bg-white/50 hover:bg-white/90
                     border-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
                                >
                                    <Github className="h-5 w-5"/>
                                    <div className="text-sm">
                                        <div className="font-semibold">GitHub</div>
                                        <div className="text-slate-600 dark:text-slate-400">nmasalkin</div>
                                    </div>
                                </a>
                            </div>

                            {/* 3. QR Telegram */}
                            <TGqr
                                className="h-40 w-40 rounded-lg border border-slate-200/80 dark:border-white/10 dark:bg-white"/>

                            {/* 4. QR GitHub */}
                            <GHqr
                                className="h-40 w-40 rounded-lg border border-slate-200/80 dark:border-white/10 dark:bg-white"/>
                        </div>
                    </Glass>
                </Section>

                {/* Footer */}
                <footer className="pb-12">
                    <Section id="footer" className="pt-6">
                        <div
                            className="flex items-center justify-center rounded-2xl border border-slate-200/80 bg-white/70 supports-[backdrop-filter]:bg-white/50 p-4 text-sm backdrop-blur-md dark:bg-white/5 dark:border-white/10 text-center">
                            <div>© {new Date().getFullYear()} Никита Масалкин. Все права защищены.</div>
                        </div>
                    </Section>
                </footer>
            </div>
        </TooltipProvider>
    );
}
