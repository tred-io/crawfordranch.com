import { ReactNode } from 'react';

interface FeatureSlabProps {
  title: string;
  kicker?: string;
  children: ReactNode;
  cta?: ReactNode;
  pattern?: 'maroon' | 'blue';
  useMapPattern?: boolean;
  useTexturePattern?: boolean;
  useTexture2Pattern?: boolean;
}

export default function FeatureSlab({
  title,
  kicker,
  children,
  cta,
  pattern = 'maroon',
  useMapPattern = false,
  useTexturePattern = false,
  useTexture2Pattern = false
}: FeatureSlabProps) {
  const titleWords = title.split(' ');
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(' ');

  const patternClass = useTexture2Pattern ? ' pattern--texture2' : (useTexturePattern ? ' pattern--texture' : (useMapPattern ? ' pattern--map' : ''));

  return (
    <section className={`slab pattern pattern--${pattern}${patternClass}`}>
      <div className="slab__inner panel panel--floating">
        {kicker && <p className="eyebrow mb-4 text-ranch-brown">{kicker}</p>}
        <h2 className="display mb-6 text-ranch-brown">
          <em>{firstWord}</em> {restOfTitle}
        </h2>
        <div className="copy mb-6 text-warm-gray">{children}</div>
        {cta && <div className="mt-8">{cta}</div>}
      </div>
    </section>
  );
}
