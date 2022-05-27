import Head from 'next/head'
import styled from 'styled-components'
import useSWR from 'swr';
import Header from '../components/Header/Header';
import Main from '../components/Main';
import Loading from '../components/Loading';
import { BestDayProvider } from '../contexts/BestDayContext';
import { DBContextProvider } from '../contexts/DBContext';
import { DistractionsRecordContextProvider } from '../contexts/DistractionsRecordContext';
import { PomodoroContextProvider } from '../contexts/PomodoroContext';
import { ScoreRecordProvider } from '../contexts/ScoreRecordContext';
import { TextsProvider } from '../contexts/TextsContext';
import { TimeRecordProvider } from '../contexts/TimeRecordContext';
import { TodosContextProvider } from '../contexts/TodosContext';
import { desktopAndIpadPortrait } from '../helpers/querysCss';
import Footer from '../components/Footer';
import MotivationPhrase from '../components/MotivationPhrase';
import DistractionCounter from '../components/DistractionCounter';

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.75rem;
    position: relative;

    min-height: 100vh;
    padding: 1rem;

    ${desktopAndIpadPortrait()}{
        padding: 1.5rem 2.5rem 1rem;
    }
`;

export default function Home() {

    const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_URL + '/api/user')

    return (
        <StyledHome>
            <Head>
                <title>PomoDoIt | A productivity web app</title>
                <meta name="description" content="A great web app to improve your productivity." />
                <meta name="theme-color" content="hsl(268, 75%, 9%)" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {(data || error) ? null : <Loading />}

            <DBContextProvider>
                <ScoreRecordProvider>
                    <TextsProvider>
                        <TimeRecordProvider>
                            <DistractionsRecordContextProvider>
                                <PomodoroContextProvider>
                                    <TodosContextProvider>
                                        <BestDayProvider>

                                            <Header />
                                            <Main />
                                            <Footer />
                                            <MotivationPhrase />
                                            <DistractionCounter />

                                        </BestDayProvider>
                                    </TodosContextProvider>
                                </PomodoroContextProvider>
                            </DistractionsRecordContextProvider>
                        </TimeRecordProvider>
                    </TextsProvider>
                </ScoreRecordProvider>
            </DBContextProvider>
        </StyledHome>
    )
}