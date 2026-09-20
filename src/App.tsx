import { config } from './config';
import { DotField, Marquee, PhoneFrame, Reveal, SpotlightCard, Ticker } from './effects';
import { Icon } from './ui';

const QUESTIONS = [
  'شو آكل بعد التمرين؟',
  'هالصحن كم سعرة؟',
  'ظهري بيوجعني — شو بديل السكوات؟',
  'بروتيني اليوم كفاية؟',
  'بدي أنزل ٥ كيلو بشهرين، كيف؟',
  'في بديل للحليب؟',
  'كم لازم أشرب ماء؟',
];

const FEATURES = [
  {
    icon: 'camera',
    title: 'صوّر صحنك',
    body: 'كابتن بيتعرّف على الطبق، بيعدّد مكوناته، وبيقدّر السعرات والبروتين والنشويات والدهون — وكلها بتطلع بالعربي. وإذا الكمية مش مزبوطة، بتعدّلها بضغطة والأرقام بتتحدّث معك.',
    shot: config.shots.meal,
    label: 'شاشة تحليل الوجبة',
    tall: true,
  },
  {
    icon: 'chat',
    title: 'اسأله متل ما بتحكي مع صاحبك',
    body: 'بيعرف وزنك وهدفك وإصاباتك وشو ما بتاكله، وبيرد على أساسهم — مش نصايح عامة منسوخة.',
  },
  {
    icon: 'calendar',
    title: 'يومك بشاشة وحدة',
    body: 'السعرات، والماكروز، والماء، والوزن، والنوم، وأيام النادي. وبتوصلك تذكيرات بأوقات وجباتك.',
  },
] as const;

const STEPS = [
  { n: '١', title: 'عرّفه على حالك', body: 'أربع أسئلة سريعة، مرة وحدة: عمرك، وطولك ووزنك، وهدفك، وشو بتاكل.' },
  { n: '٢', title: 'صوّر أو اسأل', body: 'ابعتله صورة صحنك، أو اكتبله سؤالك بالعربي بلهجتك.' },
  { n: '٣', title: 'خُد جوابك', body: 'أرقام وجبتك، وشو باقيلك لليوم، ونصيحة مبنية على هدفك أنت.' },
] as const;

const FAQ = [
  { q: 'مجاني؟', a: 'اي، مجاني بالكامل هلق، وبدون إعلانات.' },
  { q: 'في نسخة للآيفون؟', a: 'لسّه لأ. الأندرويد أول، والآيفون بعدها.' },
  { q: 'بدو نت؟', a: 'اي. التحليل والمحادثة بيصيروا على سيرفرنا، فبدهم اتصال.' },
  { q: 'قديش بياخد ليحلّل الصورة؟', a: 'تقريباً دقيقة. عم نشتغل ليصير أسرع.' },
  { q: 'بياناتي بأمان؟', a: 'صورك وأرقامك محفوظة بحسابك وحدك. والذكاء الاصطناعي شغّال على سيرفرنا نحنا، مش على خدمة شركة تانية. وبتقدر تمسح حسابك وكل شي فيه من جوّا التطبيق.' },
  { q: 'بيعوّض عن الدكتور؟', a: 'لأ. كابتن بيساعدك تنظّم أكلك وتمرينك. إذا عندك مرض أو ألم مستمر، راجع مختص.' },
] as const;

export default function App() {
  const hasApk = Boolean(config.apkUrl);
  const downloadHref = hasApk ? config.apkUrl : '#install';

  return (
    <>
      <header className="site-header">
        <div className="page">
          <a className="brand" href="#top">
            <img src="./kabtin-mark.svg" alt="" width={32} height={28} />
            كابتن
          </a>
          <nav className="site-nav">
            <a href="#features">شو بيعمل</a>
            <a href="#how">كيف بيشتغل</a>
            <a href="#faq">أسئلة</a>
            <a className="btn btn-solid btn-sm" href={downloadHref}>
              <Icon name="download" size={18} />
              نزّله
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="hero" id="top">
        <DotField />
        <div className="page hero-grid">
          <Reveal>
            <span className="eyebrow">
              <span className="dot" />
              مجاني · بدون إعلانات · عربي بالكامل
            </span>
            <h1>
              مدرّبك الشخصي
              <br />
              بجيبتك
            </h1>
            <p className="lede" style={{ marginTop: 20 }}>
              صوّر صحنك، وكابتن بيقرأه ويحسبلك سعراته. واسأله بالعربي عن أكلك وتمرينك — بيجاوبك على أساس وزنك وهدفك
              وإصاباتك، مش نصايح عامة.
            </p>

            <div className="hero-cta">
              <a className="btn btn-solid" href={downloadHref}>
                <Icon name="download" size={20} />
                {hasApk ? 'نزّل للأندرويد' : 'قريباً للأندرويد'}
              </a>
              <a className="btn btn-ghost" href="#features">شوف شو بيعمل</a>
            </div>

            <div className="hero-facts">
              <div>
                <span className="fact-value">
                  <Ticker value={4} /> أسئلة
                </span>
                <span className="fact-label">وكابتن بيعرفك</span>
              </div>
              <div>
                <span className="fact-value">
                  ~<Ticker value={60} /> ثانية
                </span>
                <span className="fact-label">لتحليل صورة وجبة</span>
              </div>
              <div>
                <span className="fact-value">
                  <Ticker value={100} />٪
                </span>
                <span className="fact-label">عربي، وبلهجتك</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="phones">
              <PhoneFrame src={config.shots.onboarding} label="أسئلة البداية" tilt={-3} />
              <PhoneFrame src={config.shots.welcome} label="شاشة الترحيب" tilt={3} />
            </div>
          </Reveal>
        </div>
      </div>

      <Marquee items={QUESTIONS} />

      {/* What it does */}
      <section id="features">
        <div className="page">
          <Reveal>
            <h2>شو بيعمل كابتن</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              تلات أشياء، بيشتغلوا مع بعض: بيشوف أكلك، بيحكي معك، وبيتابع يومك.
            </p>
          </Reveal>

          <div className="grid bento" style={{ marginTop: 36 }}>
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08} className={'tall' in f && f.tall ? 'tall' : undefined}>
                <SpotlightCard>
                  <span className="icon-tile">
                    <Icon name={f.icon} />
                  </span>
                  <h3>{f.title}</h3>
                  <p style={{ marginTop: 12 }}>{f.body}</p>
                  {'shot' in f ? (
                    <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center' }}>
                      <PhoneFrame src={f.shot} label={f.label} />
                    </div>
                  ) : null}
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how">
        <div className="page">
          <Reveal>
            <h2>كيف بيشتغل</h2>
            <p className="lede" style={{ marginTop: 14 }}>تلات خطوات، وما في جداول ولا حسابات.</p>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 36 }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <SpotlightCard>
                  <span className="step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p style={{ marginTop: 10 }}>{s.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="trust">
        <div className="page">
          <Reveal>
            <h2>شغلتين منحكيهن بصراحة</h2>
          </Reveal>
          <div className="grid grid-2" style={{ marginTop: 36 }}>
            <Reveal>
              <SpotlightCard>
                <span className="icon-tile">
                  <Icon name="scale" />
                </span>
                <h3>الأرقام تقدير، مش ميزان</h3>
                <p style={{ marginTop: 12 }}>
                  ما في تطبيق بالعالم بيعرف وزن الأكل بالغرام من صورة. كابتن بيقدّر، وبيقلّك بصراحة إنو تقدير، وبيخليك
                  تعدّل الكمية بضغطة. المهم الاتجاه على المدى الطويل، مش رقم وجبة وحدة.
                </p>
              </SpotlightCard>
            </Reveal>
            <Reveal delay={0.08}>
              <SpotlightCard>
                <span className="icon-tile">
                  <Icon name="lock" />
                </span>
                <h3>بياناتك عنّا، مش عند غيرنا</h3>
                <p style={{ marginTop: 12 }}>
                  الذكاء الاصطناعي شغّال على سيرفرنا نحنا، فصورك ومحادثاتك ما بتروح لأي شركة برّا. وبتمسح حسابك وكل شي
                  فيه من جوّا التطبيق بأي وقت.
                </p>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Install */}
      <section id="install">
        <div className="page">
          <Reveal>
            <h2>نزّله وثبّته</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              أندرويد بيحذّر من أي تطبيق مش نازل من Google Play. هاد طبيعي، وهيك بتتخطّاه:
            </p>
          </Reveal>
          <div className="grid grid-2" style={{ marginTop: 36 }}>
            <Reveal>
              <SpotlightCard>
                <ol>
                  <li>اضغط زر التنزيل، وانتظر الملف يخلص.</li>
                  <li>افتح الملف من الإشعار أو من مجلد التنزيلات.</li>
                  <li>
                    إذا طلع تحذير، اضغط <strong>إعدادات</strong> وفعّل <strong>السماح من هذا المصدر</strong>.
                  </li>
                  <li>
                    ارجع واضغط <strong>تثبيت</strong>.
                  </li>
                  <li>افتح كابتن، افتح حسابك، وجاوب أربع أسئلة — وخلصنا.</li>
                </ol>
              </SpotlightCard>
            </Reveal>
            <Reveal delay={0.08}>
              <SpotlightCard>
                <h3>النسخة الحالية</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 18 }}>
                  <span className="chip">النسخة {config.version}</span>
                  <span className="chip">أندرويد {config.minAndroid}+</span>
                  {config.apkSizeMb ? <span className="chip">{config.apkSizeMb} ميجابايت</span> : null}
                  <span className="chip">مجاني</span>
                </div>
                <p className="muted" style={{ marginTop: 18 }}>
                  التحديثات الصغيرة بتوصلك لحالها جوّا التطبيق. الكبيرة منعلن عنها هون.
                </p>
                <a className="btn btn-solid" href={downloadHref} style={{ marginTop: 22, width: '100%' }}>
                  <Icon name="download" size={20} />
                  {hasApk ? `نزّل كابتن ${config.version}` : 'قريباً'}
                </a>
                {hasApk && config.apkMirrorUrl ? (
                  <p className="muted" style={{ marginTop: 12, fontSize: 13, textAlign: 'center' }}>
                    ما زبط التحميل؟{' '}
                    <a href={config.apkMirrorUrl} style={{ textDecoration: 'underline' }}>
                      جرّب الرابط البديل
                    </a>
                  </p>
                ) : null}
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="page">
          <Reveal>
            <h2>أسئلة سريعة</h2>
          </Reveal>
          <div style={{ marginTop: 32, maxWidth: 780 }}>
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.04}>
                <details>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="page" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <img src="./kabtin-mark.svg" alt="" width={26} height={23} />
          <span>كابتن · النسخة {config.version}</span>
          <span style={{ marginInlineStart: 'auto' }}>كابتن مش بديل عن استشارة طبية.</span>
        </div>
      </footer>
    </>
  );
}
