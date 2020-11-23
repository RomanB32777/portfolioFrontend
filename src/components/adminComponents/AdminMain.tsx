import React from 'react'
import { Select } from '../UI/select/Select'

interface IUserProps {
    users: any
}

export const AdminMain: React.FC<IUserProps> = ({ users }) => {
    // console.log(users);

    return (
        <div>
            <div className="masonry row">
                <div className="col s12">
                    <h2>Dashboard</h2>
                </div>

                <div className="col s12">
                    <div className="card">
                        <table id="default-table-example" className="row-border" cellSpacing="0" >
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Auth</th>
                                    <th>Posts (n)</th>
                                    <th>Files (n)</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Email</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Auth</th>
                                    <th>Posts (n)</th>
                                    <th>Files (n)</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {users && users.map((user: any, index: number) => {
                                    return (
                                        <tr key={index}>
                                            <td>{user.email}</td>
                                            <td>{user.name}</td>
                                            <td>
                                                <Select value={user.status} required={false} onChange={(e) => console.log("change", e.target.value)} options={[
                                                    {
                                                        value: 'admin',
                                                        name: 'admin'
                                                    },
                                                    {
                                                        value: 'guest',
                                                        name: 'guest'
                                                    }
                                                ]} />
                                            </td>
                                            <td>{(user.isAuthenticated) ? 'yes' : 'no'}</td>
                                            <td>{user.posts.length}</td>
                                            <td>{user.files.length}</td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>





                <div className="col l3 m6 s12">

                    <div className="card">
                        <div className="card-stacked">
                            <div className="card-metrics card-metrics-static">
                                <div className="card-metric">
                                    <div className="card-metric-title">Users</div>
                                    <div className="card-metric-value">230,648</div>
                                    <div className="card-metric-change decrease">
                                        <i className="material-icons left">keyboard_arrow_down</i>
                                        2%
              </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-chart">
                            <canvas id="flush-area-chart-pink" height="100"></canvas>
                        </div>
                    </div>

                </div>
                <div className="col l3 m6 s12">

                    <div className="card">
                        <div className="card-stacked">
                            <div className="card-metrics card-metrics-static">
                                <div className="card-metric">
                                    <div className="card-metric-title">Conversion Rate</div>
                                    <div className="card-metric-value">0.24%</div>
                                    <div className="card-metric-change decrease">
                                        <i className="material-icons left">keyboard_arrow_down</i>
                                        9%
              </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-chart">
                            <canvas id="flush-area-chart-green" height="100"></canvas>
                        </div>
                    </div>

                </div>

                <div className="col s12">

                    <div className="card">
                        <div className="card-metrics card-metrics-toggle card-metrics-centered">
                            <div className="card-metric waves-effect active" data-metric="revenue">
                                <div className="card-metric-title">Revenue</div>
                                <div className="card-metric-value">$12,476.00</div>
                                <div className="card-metric-change">
                                    <i className="material-icons">keyboard_arrow_up</i>
                                    12%
            </div>
                            </div>
                            <div className="card-metric waves-effect" data-metric="users">
                                <div className="card-metric-title">Users</div>
                                <div className="card-metric-value">2024</div>
                                <div className="card-metric-change">
                                    <i className="material-icons">keyboard_arrow_up</i>
                                    9%
            </div>
                            </div>
                            <div className="card-metric waves-effect" data-metric="ctr">
                                <div className="card-metric-title">CTR</div>
                                <div className="card-metric-value">0.20%</div>
                                <div className="card-metric-change">
                                    <i className="material-icons">keyboard_arrow_up</i>
                                    4%
            </div>
                            </div>
                        </div>
                        <div className="card-content">
                            <canvas className="card-chart" id="main-toggle-line-chart" width="400" height="400"></canvas>
                        </div>
                    </div>

                </div>









                <div className="col m6 s12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Devices</span>
                            <div className="row row-vertical-center">
                                <div className="col s6">
                                    <canvas id="doughnut-chart" width="50%"></canvas>
                                </div>
                                <div className="col s6">
                                    <div className="chart-legend-wrapper"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="masonry row">
                <div className="col s12">
                    <h2>Secondary Data</h2>
                </div>

                <div className="col m6 s12">
                    <div className="card">
                        <div className="card-content">
                            {/* <div id="vmap" style="width: 100%; height: 400px;"></div> */}
                        </div>
                    </div>
                </div>

                <div className="col m6 s12">
                    <div className="card">
                        <div id='calendar'></div>
                    </div>
                </div>

            </div>
        </div>


    )
}