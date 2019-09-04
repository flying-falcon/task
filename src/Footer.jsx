import React from 'react';
import Pager from 'react-pager';

function Footer() {
    return (<div class="jobrow_footer">
                          <nav aria-label="Page navigation example">
                            <ul class="pagination">
                              <li class="page-item"><a class="page-link" href="#">First</a></li>
                              <li class="page-item"><a class="page-link" href="#"><span>&#9664;</span></a></li>
                              <li class="page-item"><a class="page-link" href="#">1</a></li>
                              <li class="page-item"><a class="page-link" href="#">2</a></li>
                              <li class="page-item"><a class="page-link" href="#">3</a></li>
                              <li class="page-item"><a class="page-link" href="#"><span>&#9658;</span></a></li>
                              <li class="page-item"><a class="page-link" href="#">Last</a></li>
                            </ul>
                          </nav>
                        </div>);
}

export default Footer;