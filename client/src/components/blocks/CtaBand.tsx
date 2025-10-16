interface CtaBandProps {
  title: string;
  copy: string;
  href: string;
  pattern?: 'maroon' | 'blue';
  useMapPattern?: boolean;
  useTexturePattern?: boolean;
  useTexture2Pattern?: boolean;
}

export default function CtaBand({
  title,
  copy,
  href,
  pattern = 'maroon',
  useMapPattern = true,
  useTexturePattern = false,
  useTexture2Pattern = false
}: CtaBandProps) {
  const titleWords = title.split(' ');
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(' ');

  const patternClass = useTexture2Pattern ? ' pattern--texture2' : (useTexturePattern ? ' pattern--texture' : (useMapPattern ? ' pattern--map' : ''));

  return (
    <section className={`cta-band pattern pattern--${pattern}${patternClass}`}>
      <div className="cta-wrap panel panel--floating">
        <h2 className="display mb-4 text-ranch-brown">
          <em>{firstWord}</em> {restOfTitle}
        </h2>
        <p className="copy mb-8 text-warm-gray">{copy}</p>
        <a className="btn-accent" href={href}>
          Book Now
        </a>
      </div>
    </section>
  );
}
