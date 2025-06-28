import Footer from '@/components/core/Footer/Footer';
import HomeHeader from '@/components/core/Header/HomeHeader';
import HomeHero from '@/components/core/Hero/HomeHero';


function Home() {
    return (
        <main className='relative min-h-screen w-full overflow-x-hidden bg-white dark:bg-neutral-950'>
            <HomeHeader />
            <HomeHero />
            <Footer />
        </main>
    );
};

export default Home;