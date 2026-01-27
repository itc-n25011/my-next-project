import { notFound } from 'next/navigation';
import { getNewsDetail } from '@/app/_libs/microcms';
import ButtonLink from '@/app/_components/ButtonLink';
import Article from '@/app/_components/Article';
import StyleSheet from './page.module.css';
type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({params}: Props) {
    const data = await getNewsDetail(params.slug) .catch(notFound)

    return (
        <>
            <Article data={data} />
            <div className={StyleSheet.footer}>
                <ButtonLink href="/news">ニュース一覧へ戻る</ButtonLink>
            </div>
        </>
    );

}