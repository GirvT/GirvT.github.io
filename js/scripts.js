var portfolio = document.querySelector(".row.justify-content-center")
var portfolio_modal = document.querySelector(".modal-container")

fetch("https://api.github.com/users/girvt/repos").then(
    responce => {
        if(responce.ok){
            return responce.json()
        }
        else {
            console.log(responce.statusText)
        }
    }
).then(
    result => {
        for(var i = 0; i < result.length; i++){
            if(result[i].stargazers_count != 0) {
                console.log(result[i])
                // Portfolio Section
                var add_portfolio = `
                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal${'x'+String(i)}">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="https://raw.githubusercontent.com/GirvT/GirvT.github.io/refs/heads/master/assets/img/GTLOGO.png" alt="${result[i].name}" />
                    </div>
                </div>
                `
                portfolio.insertAdjacentHTML("beforeend", add_portfolio)
                
                //Modal Section
                var add_portfolio_modal = `
                <div class="portfolio-modal modal fade" id="portfolioModal${'x'+String(i)}" tabindex="-1" aria-labelledby="portfolioModal${'x'+String(i)}" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div class="modal-body text-center pb-5">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            <!-- Portfolio Modal - Title-->
                                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">${result[i].name}</h2>
                                            <!-- Icon Divider-->
                                            <div class="divider-custom">
                                                <div class="divider-custom-line"></div>
                                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                                <div class="divider-custom-line"></div>
                                            </div>
                                            <!-- Portfolio Modal - Image-->
                                            <img class="img-fluid rounded mb-5" src="https://raw.githubusercontent.com/GirvT/GirvT.github.io/refs/heads/master/assets/img/GTLOGO.png" alt="" />
                                            <!-- Portfolio Modal - Text-->
                                            <p class="mb-4"> ${result[i].description} <a href="${result[i].svn_url}"> LINK </a> </p>
                                            <button class="btn btn-primary" data-bs-dismiss="modal">
                                                <i class="fas fa-xmark fa-fw"></i>
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
                portfolio_modal.insertAdjacentHTML("beforeend", add_portfolio_modal)
            }
        }
    }
)