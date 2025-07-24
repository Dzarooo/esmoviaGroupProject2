export const Manual = () => {
    return (
        <main>
            <div>
                <article>
                    <h1>Before you start</h1>
                    <p>
                        Create a table with the info about the bomb.
                        <br /> By that we mean:
                        <ul>
                            <li>Amount of batteries</li>
                            <li>Last digit of the serial number</li>
                            <li>If the serial number has a vowel</li>
                            <li>If the bomb has a parallel port</li>
                            <li>What indicators are turned on</li>
                        </ul>
                    </p>
                    <table>
                        <tr>
                            <td>
                                Indicators
                            </td>
                            <td>
                                <img src="https://www.bombmanual.com/web/img/appendix/indicators/IndicatorWidget.svg" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Parallel port
                            </td>
                            <td>
                                <img src="https://www.bombmanual.com/web/img/appendix/ports/Parallel.svg" alt="" />
                            </td>
                        </tr>
                    </table>
                </article>
                <article>
                    <h1>Wires</h1>
                    <table>
                        <tr>
                            <td>
                                <p><u><b>3 wires</b></u></p>
                                <p>If NO <span style="color: white; background-color: red;">red</span>, cut <b>(2)second</b></p>
                                <p>If LAST <span style="border: black solid 1px;">white</span>, cut <b>LAST</b></p>
                                <p>If more than ONE <span style="color: white; background-color: blue;">blue</span>, cut <b>(2)second <span style="color: white; background-color: blue;">blue</span></b></p>
                                <p>Else, cut <b>LAST</b></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><u><b>4 wires</b></u></p>
                                <p>If more than ONE <span style="color: white; background-color: red;">red</span> AND last digit of ser. num. is <b>ODD</b>, cut <b>LAST <span style="color: white; background-color: red;">red</span></b></p>
                                <p>If LAST <span style="background-color: yellow;">yellow</span> AND no <span style="color: white; background-color: red;">red</span>, cut <b>(1)FIRST</b></p>
                                <p>If ONE <span style="color: white; background-color: blue;">blue</span>, cut <b>FIRST</b></p>
                                <p>If more than ONE <span style="background-color: yellow;">yellow</span>, cut <b>LAST</b></p>
                                <p>Else, cut <b>(2)second</b></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><u><b>5 wires</b></u></p>
                                <p>If LAST <span style="color: white; background-color: black;">black</span> AND last digit of ser. num. is <b>ODD</b>, cut <b>(4)FOURTH</b></p>
                                <p>If ONE <span style="color: white; background-color: red;">red</span> AND more than ONE <span style="background-color: yellow;">yellow</span>, cut <b>(1)FIRST</b></p>
                                <p>If NO <span style="color: white; background-color: black;">black</span>, cut <b>(2)SECOND</b></p>
                                <p>Else, cut <b>(1)FIRST</b></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><u><b>6 wires</b></u></p>
                                <p>If NO <span style="background-color: yellow;">yellow</span> AND  last digit of ser. num. is <b>ODD</b>, cut <b>(3)THIRD</b></p>
                                <p>if ONE <span style="background-color: yellow;">yellow</span> AND more than ONE <span style="border: black solid 1px;">white</span>, cut <b>(4)FOURTH</b></p>
                                <p>If NO <span style="color: white; background-color: red;">red</span>, cut <b>LAST</b></p>
                                <p>Else, cut <b>(4)FOURTh</b></p>
                            </td>
                        </tr>
                    </table>
                </article>
            </div>
        </main>
    );
}