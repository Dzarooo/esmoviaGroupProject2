import "../css/Home.css"

export const Home = () => {
    return (
        <>
            <main id="homeMain" className="text-[#fff] bg-[#222] min-h-[90vh] flex flex-col justify-center items-center relative z-1">
                <div className="z-2 text-center p-[20px] bg-[rgba(0,0,0,0.4)] rounded-[10px]">
                    <span className="text-[3rem] font-[700] uppercase tracking-[2px] [animation:fadeIn_2s_ease-in-out;]">Keep talking and nobody explodes - guide</span>
                </div>

                <section className="z-2 bg-[rgba(0,0,0,0.4)] p-[40px] text-center text-[1.2rem] leading-[1.6] w-[80%] [margin:40px_auto] rounded-[10px]">
                    <h2 className="text-[2rem] mb-[20px]">About the Game</h2>
                    <p>
                        "Keep Talking and Nobody Explodes" is a fast-paced multiplayer party game where one player takes on
                        the role of a bomb defuser, while the rest of the team provides critical instructions to help disarm
                        the bomb—without ever seeing it. The defuser relies entirely on their teammates to describe the
                        bomb's components and solve intricate puzzles under intense time pressure. The challenge?
                        Communication is absolutely crucial, and the clock is always ticking!
                        <br></br>
                        In this guide, we’ll walk you through the best strategies for tackling each bomb puzzle in the game.
                        Whether you’re cutting wires or navigating complex memory sequences, we've got you covered. Ready to
                        save the day? Let’s dive in!
                    </p>
                </section>
            </main>
        </>
    );
}