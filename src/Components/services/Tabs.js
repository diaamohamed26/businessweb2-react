import React from 'react'
import tab1 from '../../assets/tab-1.jpg'
import tab2 from '../../assets/tab-2.jpg'
import tab3 from '../../assets/tab-3.jpg'
function Tabs() {
  return (
    <div>
      <div id='top-tabs'>
        <h2>A Performance-driven Marketing Agency</h2>
        <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
      </div>
      <div class="d-flex align-items-start" id='tabs'>
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Step 1
            <br></br> SEO Audit <br></br> We offer flexible and comprehensive 
          online marketing plans</button>
          <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Step 2
          <br></br>Project Execution <br></br>
          We offer flexible and comprehensive online marketing plans</button>
          <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Step 3 
          <br></br>
          Results & Reporting <br></br>
          We offer flexible and comprehensive online marketing plans</button>
        </div>


        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
            <img className='tab-image' src={tab1}/>
            <br></br>
            <h3>SEO Audit</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, impedit vitae. Nobis, similique omnis cumque sapiente laboriosam animi quod cupiditate?</p>
            <button className='btn-3'>
             Read More 
            </button >
          </div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
            <img className='tab-image' src={tab2}/>
              <br></br>
              <h3>Project Execution</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, impedit vitae. Nobis, similique omnis cumque sapiente laboriosam animi quod cupiditate?</p>
              <button className='btn-3'>
              Read More 
              </button>
          </div>
          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
            <img className='tab-image' src={tab3}/>
                <br></br>
                <h3>Results & Reporting</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, impedit vitae. Nobis, similique omnis cumque sapiente laboriosam animi quod cupiditate?</p>
                <button className='btn-3'>
                Read More 
                </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs
