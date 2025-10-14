import { ReactNode } from 'react';

interface FeatureSlabProps {
  title: string;
  kicker?: string;
  children: ReactNode;
  cta?: ReactNode;
  pattern?: 'maroon' | 'blue';
  useMapPattern?: boolean;
}

export default function FeatureSlab({
  title,
  kicker,
  children,
  cta,
  pattern = 'maroon',
  useMapPattern = false
}: FeatureSlabProps) {
  const titleWords = title.split(' ');
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(' ');

  return (
    <section className={`slab pattern pattern--${pattern}${useMapPattern ? ' pattern--map' : ''}`}>
      <div className="slab__inner panel panel--floating">
        {kicker && <p className="eyebrow mb-4">{kicker}</p>}
        <h2 className="display mb-6">
          <em>{firstWord}</em> {restOfTitle}
        </h2>
        <div className="copy mb-6">{children}</div>
        {cta && <div className="mt-8">{cta}</div>}
      </div>
    </section>
  );
}
