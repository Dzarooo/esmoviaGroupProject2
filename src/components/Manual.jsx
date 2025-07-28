const Manual = () => {
    return (
        <main className="manualMain flex justify-center">
            <div className="bg-amber-50 px-2">
                <article>
                    <h1 className="text-5xl">Before you start</h1>
                    <p>
                        Create a table with the info about the bomb.
                        <br /> By that we mean:
                        <ul className="list-inside list-disc">
                            <li>Amount of batteries</li>
                            <li>Last digit of the serial number</li>
                            <li>If the serial number has a vowel</li>
                            <li>If the bomb has a parallel port</li>
                            <li>What indicators are turned on</li>
                        </ul>
                    </p>
                    <table className="border border-solid border-black">
                        <tr>
                            <td className="border border-solid border-black">
                                Indicators
                            </td>
                            <td className="border border-solid border-black">
                                <img className="w-md" src="https://www.bombmanual.com/web/img/appendix/indicators/IndicatorWidget.svg" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-solid border-black">
                                Parallel port
                            </td>
                            <td className="border border-solid border-black">
                                <img className="w-md" src="https://www.bombmanual.com/web/img/appendix/ports/Parallel.svg" alt="" />
                            </td >
                        </tr>
                    </table>
                </article>
                <article>
                    <h1 className="text-5xl">Wires</h1>
                    <table>
                        <tr>
                            <td>
                                <p className="text-2xl"><u><b>3 wires</b></u></p>
                                <p>If NO <span className="text-white bg-red-500">red</span>, cut <b>(2)second</b></p>
                                <p>If LAST <span className="border border-solid border-black">white</span>, cut <b>LAST</b></p>
                                <p>If more than ONE <span className="text-white bg-blue-500">blue</span>, cut <b>(2)second <span className="text-white bg-blue-500">blue</span></b></p>
                                <p>Else, cut <b>LAST</b></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-2xl"><u><b>4 wires</b></u></p>
                                <p>If more than ONE <span className="text-white bg-red-500">red</span> AND last digit of ser. num. is <b>ODD</b>, cut <b>LAST <span className="text-white bg-red-500">red</span></b></p>
                                <p>If LAST <span className="text-black bg-yellow-500">yellow</span> AND no <span className="text-white bg-red-500">red</span>, cut <b>(1)FIRST</b></p>
                                <p>If ONE <span className="text-white bg-blue-500">blue</span>, cut <b>FIRST</b></p>
                                <p>If more than ONE <span className="text-black bg-yellow-500">yellow</span>, cut <b>LAST</b></p>
                                <p>Else, cut <b>(2)second</b></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-2xl"><u><b>5 wires</b></u></p>
                                <p>If LAST <span className="text-white bg-black">black</span> AND last digit of ser. num. is <b>ODD</b>, cut <b>(4)FOURTH</b></p>
                                <p>If ONE <span className="text-white bg-red-500">red</span> AND more than ONE <span className="text-black bg-yellow-500">yellow</span>, cut <b>(1)FIRST</b></p>
                                <p>If NO <span className="text-white bg-black">black</span>, cut <b>(2)SECOND</b></p>
                                <p>Else, cut <b>(1)FIRST</b></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-2xl"><u><b>6 wires</b></u></p>
                                <p>If NO <span className="text-black bg-yellow-500">yellow</span> AND  last digit of ser. num. is <b>ODD</b>, cut <b>(3)THIRD</b></p>
                                <p>if ONE <span className="text-black bg-yellow-500">yellow</span> AND more than ONE <span className="border border-solid border-black">white</span>, cut <b>(4)FOURTH</b></p>
                                <p>If NO <span className="text-white bg-red-500">red</span>, cut <b>LAST</b></p>
                                <p>Else, cut <b>(4)FOURTH</b></p>
                            </td>
                        </tr>
                    </table>
                </article>
            </div>
        </main>
    );
};

export default Manual;