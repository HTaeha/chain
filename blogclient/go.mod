module github.com/alice/chain/blogclient

go 1.17

require (
	github.com/alice/chain/blog v0.0.0-00010101000000-000000000000
	github.com/tendermint/starport v0.18.0
)

replace github.com/alice/chain/blog => ../blog
replace github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1
