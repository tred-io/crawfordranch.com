interface CtaBandProps {
  title: string;
  copy: string;
  href: string;
  pattern?: 'maroon' | 'blue';
  useMapPattern?: boolean;
}

export default function CtaBand({
  title,
  copy,
  href,
  pattern = 'maroon',
  useMapPattern = true
}: CtaBandProps) {
  const titleWords = title.split(' ');
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(' ');

  return (
    <section className={`cta-band pattern pattern--${pattern}${useMapPattern ? ' pattern--map' : ''}`}>
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
