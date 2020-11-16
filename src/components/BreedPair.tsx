/* Modal for Breed pair random selection */
import React from 'react'

function BreedPair(props: any) {
    const {breedpair} = props;
    /*console.log(breedpair) */
    return (
        <div className="modal fade" id="pairModal" role="dialog">
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Breed pair</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        {breedpair.length ? 
                        (<p>{ breedpair[0].name} and { breedpair[1].name} are pair</p>) : (<p>Got no random pair...</p>) }
                        
                    </div>
                    <div className="modal-footer">
                        {breedpair.length ?
                        (<button type="button" className="btn btn-success btn-block" 
                            data-dismiss="modal" data-toggle="modal" data-target="#addsheepModal">Spawn a breed</button>) :
                        ((<button type="button" className="btn btn-success btn-block" 
                            data-dismiss="modal">Close</button>))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreedPair
