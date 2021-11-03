package keeper

import (
	"github.com/alice/chain/x/blog/types"
)

var _ types.QueryServer = Keeper{}
