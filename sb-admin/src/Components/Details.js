import React from 'react'
import postingPhoto from "../Assets/undraw_posting_photo.svg"

const Details = (props) => {
  return (
    <>
    <div className="row">

{/* <!-- Content Column --> */}
<div className="col-lg-6 mb-4">

    {/* <!-- Project Card Example --> */}
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div className="card-body">
            <h4 className="small font-weight-bold">Server Migration <span
                    className="float-right">{props.ProjectsData.ServerMigration}%</span></h4>
            <div className="progress mb-4">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: `${props.ProjectsData.ServerMigration}%`}}
                    aria-valuenow={props.ProjectsData.ServerMigration} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold">Sales Tracking <span
                    className="float-right">{props.ProjectsData.SalesTracking}%</span></h4>
            <div className="progress mb-4">
                <div className="progress-bar bg-warning" role="progressbar" style={{width: `${props.ProjectsData.SalesTracking}%`}}
                    aria-valuenow={props.ProjectsData.SalesTracking} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold">Customer Database <span
                    className="float-right">{props.ProjectsData.CustomerDatabase}%</span></h4>
            <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" style={{width: `${props.ProjectsData.CustomerDatabase}%`}}
                    aria-valuenow={props.ProjectsData.CustomerDatabase} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold">Payout Details <span
                    className="float-right">{props.ProjectsData.PayoutDetails}%</span></h4>
            <div className="progress mb-4">
                <div className="progress-bar bg-info" role="progressbar" style={{width: `${props.ProjectsData.PayoutDetails}%`}}
                    aria-valuenow={props.ProjectsData.PayoutDetails} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className="small font-weight-bold">Account Setup <span
                    className="float-right">{props.ProjectsData.AccountSetup}%</span></h4>
            <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width: `${props.ProjectsData.AccountSetup}%`}}
                    aria-valuenow={props.ProjectsData.AccountSetup} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>

    {/* <!-- Color System --> */}
    <div className="row">
        <div className="col-lg-6 mb-4">
            <div className="card bg-primary text-white shadow">
                <div className="card-body">
                    Primary
                    <div className="text-white-50 small">{props.colorData.Primary}</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-success text-white shadow">
                <div className="card-body">
                    Success
                    <div className="text-white-50 small">{props.colorData.Success}</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    Info
                    <div className="text-white-50 small">{props.colorData.Info}</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-warning text-white shadow">
                <div className="card-body">
                    Warning
                    <div className="text-white-50 small">{props.colorData.Warning}</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-danger text-white shadow">
                <div className="card-body">
                    Danger
                    <div className="text-white-50 small">{props.colorData.Warning}</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-secondary text-white shadow">
                <div className="card-body">
                    Secondary
                    <div className="text-white-50 small">{props.colorData.Secondary}</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-light text-black shadow">
                <div className="card-body">
                    Light
                    <div className="text-black-50 small">{props.colorData.Light}</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    Dark
                    <div className="text-white-50 small">{props.colorData.Dark}</div>
                </div>
            </div>
        </div>
    </div>

</div>

<div className="col-lg-6 mb-4">

    {/* <!-- Illustrations --> */}
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
        </div>
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25+'rem'}}
                    src={postingPhoto} alt="..."/>
            </div>
            <p>Add some quality, svg illustrations to your project courtesy of <a
                    target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                constantly updated collection of beautiful svg images that you can use
                completely free and without attribution!</p>
            <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                unDraw &rarr;</a>
        </div>
    </div>

    {/* <!-- Approach --> */}
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
        </div>
        <div className="card-body">
            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                CSS bloat and poor page performance. Custom CSS classes are used to create
                custom components and custom utility classes.</p>
            <p className="mb-0">Before working with this theme, you should become familiar with the
                Bootstrap framework, especially the utility classes.</p>
        </div>
    </div>

</div>
</div>
    </>
  )
}

export default Details