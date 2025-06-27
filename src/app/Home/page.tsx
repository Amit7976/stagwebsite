import HomeHeader from '@/components/core/Header/HomeHeader';
import HomeHero from '@/components/core/Hero/HomeHero';


function Home() {
    return (
        <main className='relative min-h-screen w-full overflow-x-hidden'>
            <HomeHeader />
            <HomeHero />
        </main>
    );
};

export default Home;