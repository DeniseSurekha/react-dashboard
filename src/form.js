import * as React from "react";

class Articlelist extends React.Component{
     render() {
        return (

            <div className="post-grid">

                <article className="grid-item post tag-photography">
                    <div className="post-inside">
                        <div className="post-bg" style={{backgroundImage: `url(${"1.jpg"})`} }>a</div>
                     
                        <div className="read-more">
                            <a className="button light" href="../what-to-know-before-moving-to-new-york" title="What To Know Before Moving To New York">Read More</a>
                        </div>
                    </div>
                </article>

                <article className="grid-item post tag-music">
                    <div className="post-inside">
                        <div className="post-bg" style={{backgroundImage: `url(${"2.jpg"})`} } >a</div>
                     
                        <div className="read-more">
                            <a className="button light" href="https://curious.justgoodthemes.com/six-things-that-will-make-or-break-fusion-festival/" title="Seven Things That Will Make Or Break Fusion Festival">Read More</a>
                        </div>
                    </div>
                </article>

                <article className="grid-item post tag-travel tag-tips">
                    <div className="post-inside">
                    <div className="post-bg" style={{backgroundImage: `url(${"4.jpg"})`} } >a</div>
                      
                        <div className="read-more">
                            <a className="button light" href="/visiting-london-for-the-first-time/" title="Visiting London for the First Time">Read More</a>
                        </div>
                    </div>
                </article>
               





            </div>
        )
    }
}
export default Articlelist;