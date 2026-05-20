import Image from "next/image";
import type { ReactElement, ReactNode } from "react";
import { HeroCarousel } from "./components/HeroCarousel";

type IconProps = {
  className?: string;
};

type Service = {
  title: string;
  body: string;
  icon: (props: IconProps) => ReactNode;
};

type Step = {
  number: string;
  title: string;
  body: string;
};

type PricePlan = {
  tag: string;
  title: string;
  body: string;
  price: string;
  featured?: boolean;
  items: string[];
};

type Review = {
  quote: string;
  name: string;
  avatar: string;
  color: string;
};

type Contact = {
  text: string;
  icon: (props: IconProps) => ReactNode;
};

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=2200&q=86",
    label: "显示狗狗横幅",
  },
  {
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=2200&q=86",
    label: "显示猫咪横幅",
  },
  {
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=2200&q=86",
    label: "显示兔兔横幅",
  },
];

const services: Service[] = [
  {
    title: "低压洗护",
    body: "温水预冲、氨基酸浴液、分区冲洗，适合敏感和第一次到店的小朋友。",
    icon: RainIcon,
  },
  {
    title: "造型修剪",
    body: "泰迪、比熊、雪纳瑞等常见犬种造型，也支持清爽局部修和脚底毛处理。",
    icon: GroomingIcon,
  },
  {
    title: "猫咪安静护理",
    body: "独立猫区、低噪设备、毛巾包裹安抚，减少陌生环境带来的紧张。",
    icon: CatCareIcon,
  },
  {
    title: "皮毛养护",
    body: "去浮毛、开结、肉垫护理、耳眼清洁和留香喷雾，让触感更蓬松干净。",
    icon: CoatCareIcon,
  },
];

const processSteps: Step[] = [
  {
    number: "01",
    title: "到店评估",
    body: "记录宠物品种、体重、皮肤状态、毛结程度和近期健康情况。",
  },
  {
    number: "02",
    title: "分区洗护",
    body: "耳眼保护、温水冲洗、专用浴液、吹水和低噪烘干分步进行。",
  },
  {
    number: "03",
    title: "交付反馈",
    body: "美容师会说明护理发现、居家梳毛建议和下次洗护间隔。",
  },
];

const pricePlans: PricePlan[] = [
  {
    tag: "日常清洁",
    title: "基础洗护",
    body: "适合每月固定洗澡和简单护理。",
    price: "¥88",
    items: ["温水洗浴与吹干", "耳眼清洁", "指甲修剪"],
  },
  {
    tag: "最受欢迎",
    title: "精致护理",
    body: "适合换季掉毛、皮毛干燥和需要更蓬松的宠物。",
    price: "¥168",
    featured: true,
    items: ["基础洗护全套", "去浮毛与开结", "肉垫护理与留香"],
  },
  {
    tag: "形象焕新",
    title: "造型修剪",
    body: "适合需要整体造型、脸部圆修或局部精修的宠物。",
    price: "¥238",
    items: ["精致护理全套", "犬种标准造型", "护理报告与照片"],
  },
];

const reviews: Review[] = [
  {
    quote: "我家比熊很怕吹风，美容师会边停边安抚，最后造型也很圆润，接回家没有应激。",
    name: "奶油的家长",
    avatar: "林",
    color: "bg-[var(--coral)]",
  },
  {
    quote: "猫区很安静，能看到操作过程。洗完毛特别蓬，店员还提醒我耳朵有点红。",
    name: "糯米的家长",
    avatar: "周",
    color: "bg-[var(--blue)]",
  },
  {
    quote: "价格提前说清楚，没有临时加项目。接送也准时，适合工作日没空跑店的时候。",
    name: "豆包的家长",
    avatar: "许",
    color: "bg-[var(--mint)]",
  },
];

const contacts: Contact[] = [
  {
    text: "电话：021-8888 6620",
    icon: PhoneIcon,
  },
  {
    text: "地址：梧桐路 128 号 1 层",
    icon: PinIcon,
  },
  {
    text: "营业：10:00 - 20:30，周一店休",
    icon: ClockIcon,
  },
];

const petTypes = ["小型犬", "中大型犬", "猫咪", "其他"];
const bookingItems = ["基础洗护", "精致护理", "造型修剪", "先咨询"];

export default function Home() {
  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-6 bg-gradient-to-b from-[#151f1da8] to-transparent px-5 py-4 text-white sm:px-8 lg:px-14"
        aria-label="主导航"
      >
        <a className="flex items-center gap-3 whitespace-nowrap font-extrabold" href="#top" aria-label="毛球泡泡首页">
          <span className="grid size-9 place-items-center rounded-full border border-white/55 bg-white/20 backdrop-blur">
            <PawIcon className="size-5 fill-current" />
          </span>
          <span className="max-sm:max-w-[120px] max-sm:overflow-hidden max-sm:text-ellipsis">毛球泡泡</span>
        </a>
        <div className="flex items-center gap-4 text-sm sm:gap-7">
          <a className="max-[940px]:hidden" href="#services">
            服务
          </a>
          <a className="max-[940px]:hidden" href="#pricing">
            套餐
          </a>
          <a className="max-[940px]:hidden" href="#reviews">
            口碑
          </a>
          <a
            href="#booking"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-3 text-[13px] font-bold text-[#26312f] transition hover:-translate-y-0.5 sm:min-h-11 sm:px-5 sm:text-sm"
            style={{ color: "#26312f" }}
          >
            预约
          </a>
        </div>
      </nav>

      <main id="top">
        <header className="relative grid min-h-[92vh] items-end overflow-hidden bg-[#17211f] text-white max-sm:min-h-[88vh]">
          <HeroCarousel slides={heroSlides} />
          <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(18,31,28,0.78),rgba(18,31,28,0.34)_52%,rgba(18,31,28,0.1)),linear-gradient(to_top,rgba(18,31,28,0.22),rgba(18,31,28,0))]" />
          <div className="relative z-20 mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[minmax(0,680px)_1fr] items-end gap-10 pb-[74px] pt-[140px] max-[940px]:grid-cols-1 max-sm:w-[min(1180px,calc(100%-32px))] max-sm:pb-[76px]">
            <div>
              <p className="mb-5 inline-flex items-center gap-2.5 text-sm font-bold text-white/90 before:h-0.5 before:w-8 before:bg-[var(--amber)] before:content-['']">
                社区精品宠物洗护店
              </p>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.95] md:text-7xl lg:text-8xl">
                让每一次洗澡，都像被温柔照顾。
              </h1>
              <p className="my-6 max-w-xl text-lg text-white/85 md:text-xl">
                毛球泡泡为猫狗提供低压洗护、皮毛护理、造型修剪和接送预约。透明操作区、独立烘干舱、每只宠物一套清洁用具。
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryLink href="#booking" ariaLabel="跳转到预约表单">
                  <CalendarIcon className="size-5" />
                  立即预约
                </PrimaryLink>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(38,49,47,0.14)] bg-white px-5 font-bold text-[#26312f] transition hover:-translate-y-0.5"
                  href="#pricing"
                  style={{ color: "#26312f" }}
                >
                  查看套餐
                </a>
              </div>
            </div>
            <div
              className="grid overflow-hidden rounded-lg border border-white/25 bg-white/15 backdrop-blur-lg max-[940px]:max-w-2xl sm:grid-cols-3"
              aria-label="门店数据"
            >
              {[
                ["4.9", "客户评分"],
                ["38min", "基础洗护均时"],
                ["1v1", "专属美容师"],
              ].map(([value, label]) => (
                <div
                  className="border-b border-white/25 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  key={label}
                >
                  <strong className="block text-2xl leading-none md:text-3xl">{value}</strong>
                  <span className="mt-2 block text-sm text-white/75">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <Section id="services">
          <SectionHead
            kicker="SERVICES"
            title="从清洁到造型，按宠物状态定制。"
            note="不赶工、不混笼、不强行吹干。每次服务前都会先做皮肤、毛结、耳道和情绪评估。"
          />
          <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex min-h-[236px] flex-col justify-between rounded-lg border border-[var(--line)] bg-white p-6 shadow-[0_10px_30px_rgba(37,49,47,0.06)]"
              >
                <span className="grid size-11 place-items-center rounded-full bg-[var(--mist)] text-[var(--ink)]">
                  <service.icon className="size-5 fill-none stroke-current stroke-2" />
                </span>
                <div>
                  <h3 className="mb-2.5 mt-5 text-xl font-bold">{service.title}</h3>
                  <p className="m-0 text-[var(--muted)]">{service.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <section className="bg-[var(--mist)] px-5 py-16 sm:px-8 md:py-24 lg:px-14">
          <div className="mx-auto grid w-[min(1180px,100%)] items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="relative min-h-[390px] sm:min-h-[480px] lg:min-h-[560px]" aria-label="门店宠物洗护照片">
              <div className="absolute bottom-[90px] left-0 right-0 top-0 overflow-hidden rounded-lg bg-[var(--line)] shadow-[var(--shadow)] sm:bottom-20 sm:right-[12%]">
                <Image
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1400&q=84"
                  alt="小狗在店内接受温和洗护"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 aspect-[4/5] w-[58%] overflow-hidden rounded-lg border-[10px] border-[var(--mist)] bg-[var(--line)] shadow-[var(--shadow)] sm:w-[48%]">
                <Image
                  src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=900&q=84"
                  alt="干净放松的猫咪"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 58vw, 270px"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-extrabold text-[var(--coral)]">HOW IT WORKS</p>
              <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
                看得见的流程，才值得托付。
              </h2>
              <div className="mt-8 grid gap-3">
                {processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="grid grid-cols-[52px_1fr] items-start gap-4 border-b border-[rgba(38,49,47,0.13)] py-4"
                  >
                    <span className="grid size-11 place-items-center rounded-full bg-[var(--blue)] font-extrabold text-white">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="mb-1 text-lg font-bold">{step.title}</h3>
                      <p className="m-0 text-[var(--muted)]">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Section id="pricing">
          <SectionHead
            kicker="PRICING"
            title="清晰的价格，按体型与护理难度微调。"
            note="以下为小型犬/短毛猫参考价。中大型犬、严重打结、特殊造型会在服务前确认报价。"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {pricePlans.map((plan) => (
              <article
                key={plan.title}
                className={[
                  "relative overflow-hidden rounded-lg border bg-white p-6 shadow-[0_10px_30px_rgba(37,49,47,0.06)]",
                  plan.featured
                    ? "border-[rgba(232,127,104,0.5)] shadow-[0_18px_48px_rgba(232,127,104,0.12)]"
                    : "border-[var(--line)]",
                ].join(" ")}
              >
                <span className="inline-flex min-h-7 items-center rounded-full bg-[#f8dfb1] px-2.5 text-xs font-extrabold">
                  {plan.tag}
                </span>
                <h3 className="mb-2.5 mt-5 text-xl font-bold">{plan.title}</h3>
                <p className="text-[var(--muted)]">{plan.body}</p>
                <div className="my-5 text-4xl font-extrabold leading-none">
                  {plan.price} <small className="text-base font-semibold text-[var(--muted)]">起</small>
                </div>
                <ul className="mt-5 grid gap-3 text-[var(--muted)]">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 before:mt-2 before:size-2 before:shrink-0 before:rounded-full before:bg-[var(--mint)] before:content-['']">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <section id="reviews" className="bg-[#f7efe8] px-5 py-16 sm:px-8 md:py-24 lg:px-14">
          <div className="mx-auto w-[min(1180px,100%)]">
            <SectionHead
              kicker="REVIEWS"
              title="熟客愿意反复来的小店。"
              note="我们更在意宠物离店时的状态：干净、放松、愿意下次再来。"
            />
            <div className="grid gap-4 md:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="rounded-lg border border-[var(--line)] bg-white p-6 shadow-[0_10px_30px_rgba(37,49,47,0.06)]"
                >
                  <div className="text-lg text-[var(--amber)]">★★★★★</div>
                  <p className="mt-3 text-[var(--muted)]">{review.quote}</p>
                  <div className="mt-5 flex items-center gap-3 font-extrabold">
                    <span className={`grid size-10 place-items-center rounded-full text-white ${review.color}`}>
                      {review.avatar}
                    </span>
                    <span>{review.name}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="bg-[var(--ink)] px-5 py-16 text-white sm:px-8 md:py-24 lg:px-14">
          <div className="mx-auto grid w-[min(1180px,100%)] items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[72px]">
            <div>
              <p className="mb-2 text-sm font-extrabold text-[#f8dfb1]">BOOKING</p>
              <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
                预约前告诉我们宠物的小习惯。
              </h2>
              <p className="mt-5 max-w-sm text-white/70">
                提交后我们会在 30 分钟内电话或微信确认时间、宠物状态和预计价格。
              </p>
              <div className="mt-8 grid gap-4">
                {contacts.map((contact) => (
                  <div key={contact.text} className="flex items-center gap-3 text-white/85">
                    <contact.icon className="size-5 fill-none stroke-current stroke-2" />
                    <span>{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-[var(--line)] bg-white p-6 text-[var(--ink)] shadow-[0_10px_30px_rgba(37,49,47,0.06)] md:p-8">
              <form className="grid gap-3.5 sm:grid-cols-2">
                <Field label="家长姓名">
                  <input type="text" placeholder="例如：陈女士" />
                </Field>
                <Field label="联系电话">
                  <input type="tel" placeholder="用于确认预约" />
                </Field>
                <Field label="宠物类型">
                  <select defaultValue={petTypes[0]}>
                    {petTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </Field>
                <Field label="预约项目">
                  <select defaultValue={bookingItems[0]}>
                    {bookingItems.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </Field>
                <Field label="希望到店时间" full>
                  <input type="text" placeholder="例如：本周六下午 3 点" />
                </Field>
                <Field label="宠物情况" full>
                  <textarea placeholder="怕水、怕吹风、皮肤敏感、严重打结等情况都可以写在这里" />
                </Field>
                <button
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--coral)] px-5 font-bold text-white shadow-[0_12px_26px_rgba(232,127,104,0.32)] transition hover:-translate-y-0.5 sm:col-span-2"
                  type="button"
                >
                  <ArrowRightIcon className="size-5 fill-none stroke-current stroke-2" />
                  提交预约信息
                </button>
                <p className="m-0 text-sm text-[var(--muted)] sm:col-span-2">
                  演示页面不会真实提交表单，可接入微信、电话或门店预约系统。
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] bg-[var(--paper)] px-5 py-7 text-sm text-[var(--muted)] sm:px-8 lg:px-14">
        <div className="mx-auto flex w-[min(1180px,100%)] flex-wrap justify-between gap-4">
          <span>© 2026 毛球泡泡 Pet Grooming</span>
          <span>低压洗护 · 透明操作 · 独立清洁用具</span>
        </div>
      </footer>
    </>
  );
}

function Section({
  id,
  children,
}: Readonly<{
  id: string;
  children: ReactNode;
}>) {
  return (
    <section id={id} className="px-5 py-16 sm:px-8 md:py-24 lg:px-14">
      <div className="mx-auto w-[min(1180px,100%)]">{children}</div>
    </section>
  );
}

function SectionHead({
  kicker,
  title,
  note,
}: Readonly<{
  kicker: string;
  title: string;
  note: string;
}>) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6 max-sm:block">
      <div>
        <p className="mb-2 text-sm font-extrabold text-[var(--coral)]">{kicker}</p>
        <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">{title}</h2>
      </div>
      <p className="m-0 max-w-sm text-[var(--muted)] max-sm:mt-3">{note}</p>
    </div>
  );
}

function Field({
  label,
  full = false,
  children,
}: Readonly<{
  label: string;
  full?: boolean;
  children: ReactElement;
}>) {
  return (
    <label className={`grid gap-2 text-sm font-bold text-[var(--muted)] ${full ? "sm:col-span-2" : ""}`}>
      {label}
      {children}
    </label>
  );
}

function PrimaryLink({
  href,
  ariaLabel,
  children,
}: Readonly<{
  href: string;
  ariaLabel: string;
  children: ReactNode;
}>) {
  return (
    <a
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--coral)] px-5 font-bold text-white shadow-[0_12px_26px_rgba(232,127,104,0.32)] transition hover:-translate-y-0.5"
      href={href}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

function PawIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M7.6 9.2c1.1 0 2-1.3 2-2.8s-.9-2.8-2-2.8-2 1.3-2 2.8.9 2.8 2 2.8Zm8.8 0c1.1 0 2-1.3 2-2.8s-.9-2.8-2-2.8-2 1.3-2 2.8.9 2.8 2 2.8ZM5.2 14.1c.9.2 1.9-.7 2.2-2s-.2-2.5-1.1-2.7-1.9.7-2.2 2 .2 2.5 1.1 2.7Zm13.6 0c.9-.2 1.4-1.4 1.1-2.7s-1.3-2.2-2.2-2-1.4 1.4-1.1 2.7 1.3 2.2 2.2 2ZM12 11.3c-2.6 0-5.2 3.4-5.2 5.5 0 1.4 1.1 2.4 2.6 2.4 1 0 1.6-.4 2.6-.4s1.6.4 2.6.4c1.5 0 2.6-1 2.6-2.4 0-2.1-2.6-5.5-5.2-5.5Z" />
    </svg>
  );
}

function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-2`} aria-hidden="true">
      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RainIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4 14c4-4 8-4 16 0M7 17c3-2 7-2 10 0M10 20h4M12 3v7M8 7l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GroomingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M7 3h10v5H7zM9 8v13M15 8v13M5 21h14M10 13h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CatCareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M6 12a6 6 0 0 1 12 0v7H6zM9 12a3 3 0 0 1 6 0M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CoatCareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 3c4 3 6 6 6 10a6 6 0 0 1-12 0c0-4 2-7 6-10Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 14c1 1 2 1.5 3 1.5s2-.5 3-1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
