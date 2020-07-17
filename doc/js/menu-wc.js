'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@d-bas/ngx-pipes documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ArrayTransformPipesModule.html" data-type="entity-link">ArrayTransformPipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-ArrayTransformPipesModule-28c65d2c071d95e905f07f0e912faaf5"' : 'data-target="#xs-pipes-links-module-ArrayTransformPipesModule-28c65d2c071d95e905f07f0e912faaf5"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ArrayTransformPipesModule-28c65d2c071d95e905f07f0e912faaf5"' :
                                            'id="xs-pipes-links-module-ArrayTransformPipesModule-28c65d2c071d95e905f07f0e912faaf5"' }>
                                            <li class="link">
                                                <a href="pipes/ArrayJoinPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArrayJoinPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatetimePipesModule.html" data-type="entity-link">DatetimePipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-DatetimePipesModule-da9132e53358fb2478d64c3639b0e5cb"' : 'data-target="#xs-pipes-links-module-DatetimePipesModule-da9132e53358fb2478d64c3639b0e5cb"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-DatetimePipesModule-da9132e53358fb2478d64c3639b0e5cb"' :
                                            'id="xs-pipes-links-module-DatetimePipesModule-da9132e53358fb2478d64c3639b0e5cb"' }>
                                            <li class="link">
                                                <a href="pipes/ElapsedTimePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ElapsedTimePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TimestampPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimestampPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link">PipesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StringCheckPipesModule.html" data-type="entity-link">StringCheckPipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-StringCheckPipesModule-187b2d782e93ec358671e163b76c92d0"' : 'data-target="#xs-pipes-links-module-StringCheckPipesModule-187b2d782e93ec358671e163b76c92d0"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-StringCheckPipesModule-187b2d782e93ec358671e163b76c92d0"' :
                                            'id="xs-pipes-links-module-StringCheckPipesModule-187b2d782e93ec358671e163b76c92d0"' }>
                                            <li class="link">
                                                <a href="pipes/StringEndsWithPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringEndsWithPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/StringIncludesPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringIncludesPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/StringStartsWithPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringStartsWithPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StringTransformPipesModule.html" data-type="entity-link">StringTransformPipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-StringTransformPipesModule-ea3f96d047fba77ac8374d172042e199"' : 'data-target="#xs-pipes-links-module-StringTransformPipesModule-ea3f96d047fba77ac8374d172042e199"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-StringTransformPipesModule-ea3f96d047fba77ac8374d172042e199"' :
                                            'id="xs-pipes-links-module-StringTransformPipesModule-ea3f96d047fba77ac8374d172042e199"' }>
                                            <li class="link">
                                                <a href="pipes/StringFormatUnicornPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringFormatUnicornPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/StringNl2brPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringNl2brPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/StringTruncateByWordsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringTruncateByWordsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/StringTruncatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringTruncatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/StringUnescapePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringUnescapePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UnitsPipesModule.html" data-type="entity-link">UnitsPipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-UnitsPipesModule-61bd9e93dd2fe9f8e8d80b225c53c77a"' : 'data-target="#xs-pipes-links-module-UnitsPipesModule-61bd9e93dd2fe9f8e8d80b225c53c77a"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-UnitsPipesModule-61bd9e93dd2fe9f8e8d80b225c53c77a"' :
                                            'id="xs-pipes-links-module-UnitsPipesModule-61bd9e93dd2fe9f8e8d80b225c53c77a"' }>
                                            <li class="link">
                                                <a href="pipes/BytesToMegabytesPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BytesToMegabytesPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UtilsPipesModule.html" data-type="entity-link">UtilsPipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-UtilsPipesModule-1b103360acf5ec2f96216058d9f0d56c"' : 'data-target="#xs-pipes-links-module-UtilsPipesModule-1b103360acf5ec2f96216058d9f0d56c"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-UtilsPipesModule-1b103360acf5ec2f96216058d9f0d56c"' :
                                            'id="xs-pipes-links-module-UtilsPipesModule-1b103360acf5ec2f96216058d9f0d56c"' }>
                                            <li class="link">
                                                <a href="pipes/DefaultValuePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DefaultValuePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/IsEmptyPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsEmptyPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/IsNotEmptyPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsNotEmptyPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/IsNotNullPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsNotNullPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/IsNotUndefinedPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsNotUndefinedPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/IsNullPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsNullPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/IsUndefinedPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsUndefinedPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ProgressPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgressPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SafeHtmlPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafeHtmlPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ElapsedTimeOptions.html" data-type="entity-link">ElapsedTimeOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IsEmptyOptions.html" data-type="entity-link">IsEmptyOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProgressOptions.html" data-type="entity-link">ProgressOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});